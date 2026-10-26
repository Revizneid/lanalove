import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';

const STYLE =
  'soft watercolor storybook illustration, warm pastel rose pink, peach and cream color palette, dreamy romantic atmosphere, gentle gradients, delicate brush texture, high quality, detailed';

const IMAGES: Array<{ file: string; size: string; prompt: string }> = [
  {
    file: 'hero-couple.png',
    size: '1152x864',
    prompt: `A young couple in love sitting together on a glowing crescent moon among soft clouds, embracing tenderly, floating hearts and tiny stars around them, ${STYLE}`,
  },
  {
    file: 'timeline-meeting.png',
    size: '1024x1024',
    prompt: `First meeting of a young couple at a cozy coffee shop, two people shyly glancing at each other across a wooden table with two steaming coffee cups, window light, ${STYLE}`,
  },
  {
    file: 'timeline-firstdate.png',
    size: '1024x1024',
    prompt: `Romantic first date, young couple walking hand in hand under a starry evening sky, glowing string lights and lanterns above the street, ${STYLE}`,
  },
  {
    file: 'timeline-home.png',
    size: '1024x1024',
    prompt: `Young couple moving into their cozy little home together, carrying cardboard boxes and a potted green plant, small house with warm glowing windows, ${STYLE}`,
  },
  {
    file: 'timeline-babyborn.png',
    size: '1024x1024',
    prompt: `A newborn baby girl wrapped in a soft pink blanket sleeping peacefully in a crib, surrounded by delicate flower petals and soft glowing light, tender mood, ${STYLE}`,
  },
  {
    file: 'baby-portrait.png',
    size: '1024x1024',
    prompt: `Adorable 7 month old baby girl sitting and laughing with chubby cheeks and sparkling eyes, wearing a soft pink bow headband, surrounded by butterflies and small flowers, ${STYLE}`,
  },
  {
    file: 'family-portrait.png',
    size: '1344x768',
    prompt: `Happy family of three, father mother and baby daughter hugging together under a blooming tree with falling petals, warm golden sunset light, heartwarming, ${STYLE}`,
  },
  {
    file: 'love-envelope.png',
    size: '1024x1024',
    prompt: `A vintage cream love letter envelope sealed with a red heart wax stamp, surrounded by rose petals and small floating hearts, soft shadows on warm cream paper background, ${STYLE}`,
  },
];

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const zai = await ZAI.create();
  const results: string[] = [];

  for (const img of IMAGES) {
    const outPath = path.join(OUT_DIR, img.file);
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
      results.push(`SKIP (exists): ${img.file}`);
      continue;
    }
    let ok = false;
    for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
      try {
        const res = await zai.images.generations.create({
          prompt: img.prompt,
          size: img.size,
        });
        const b64 = res?.data?.[0]?.base64;
        if (!b64) throw new Error('empty base64');
        fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
        results.push(`OK: ${img.file} (${Math.round(fs.statSync(outPath).size / 1024)} KB)`);
        ok = true;
      } catch (e) {
        results.push(`FAIL(${attempt}): ${img.file} - ${(e as Error).message}`);
        await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
    }
  }
  console.log(results.join('\n'));
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
