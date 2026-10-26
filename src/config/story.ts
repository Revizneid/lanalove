// ============================================================
// CẤU HÌNH CÂU CHUYỆN — bạn có thể dễ dàng sửa tên & ngày tháng
// tại đây mà không cần động vào phần code khác.
// ============================================================

export const STORY = {
  himName: "Anh",
  herName: "Em",
  babyName: "Bé Mít",
  // Ngày chính thức yêu nhau
  anniversary: "2025-04-07T00:00:00+07:00",
  // Ngày con gái chào đời
  babyBirthday: "2026-03-08T00:00:00+07:00",
};

export const HERO = {
  eyebrow: "Một câu chuyện nhỏ • Hai năm dài yêu thương",
  titleTop: "Hành Trình",
  titleAccent: "Của Chúng Mình",
  subtitle:
    "24 tháng trôi qua, 575 ngày nắm tay nhau, và một thiên thần nhỏ gần 8 tháng tuổi — tất cả bắt đầu từ một cái gật đầu chào rất tình cờ.",
  cta: "Lướt xuống đọc chuyện mình nhé",
  chips: [
    { value: "575+", label: "ngày yêu nhau" },
    { value: "2", label: "trái tim, 1 mái nhà" },
    { value: "7+", label: "tháng tuổi của công chúa nhỏ" },
  ],
};

export type TimelineItem = {
  date: string;
  title: string;
  desc: string;
  image?: string;
  special?: "pregnancy" | "now";
};

export const TIMELINE: TimelineItem[] = [
  {
    date: "07.04.2025",
    title: "Lần Đầu Gặp Gỡ",
    desc: "Một buổi chiều thu tưởng chừng bình thường, hai người lạ gặp nhau tại quán cà phê nhỏ. Không ai ngờ rằng cái gật đầu chào hôm ấy lại là mở đầu cho cả một hành trình dài.",
    image: "/images/timeline-meeting.png",
  },
  {
    date: "13.04.2025",
    title: "Buổi Hẹn Đầu Tiên",
    desc: "Đường phố ngập đèn vàng, tiếng tim đập nhanh hơn cả tiếng bước chân. Buổi hẹn đầu tiên khép lại bằng một cái nắm tay vụng về nhưng ấm áp đến lạ kỳ.",
    image: "/images/timeline-firstdate.png",
  },
  {
    date: "16.05.2025",
    title: "Về Chung Một Nhà",
    desc: "Chúng mình xách những thùng đồ nhỏ vào căn nhà ấm. Từ hai nơi riêng lẽ, từ nay đã có một nơi để gọi là “nhà của mình” — có mùi cơm chiều và tiếng cười mỗi tối.",
    image: "/images/timeline-home.png",
  },
  {
    date: "16.06.2025",
    title: "Hai Vạch Màu Hồng",
    desc: "Một sáng tháng Mười Một, em cầm trong tay điều kỳ diệu nhất: hai vạch hồng báo rằng có một nhịp tim nhỏ bé đang lớn lên từng ngày bên trong mẹ.",
    special: "pregnancy",
  },
  {
    date: "08.03.2026",
    title: "Thiên Thần Chào Đời",
    desc: "Sau 280 ngày mong chờ, cô con gái nhỏ cất tiếng khóc chào đời. Từ khoảnh khắc ấy, “hai người” chính thức trở thành “ba người”.",
    image: "/images/timeline-babyborn.png",
  },
  {
    date: "03.11.2026",
    title: "Hôm Nay & Mãi Về Sau",
    desc: "Hai năm bên nhau, một bé công chúa hơn 7 tháng tuổi, và hàng triệu khoảnh khắc vẫn muốn tiếp tục viết tiếp. Câu chuyện của chúng mình… mới chỉ bắt đầu thôi.",
    image: "/images/family-portrait.png",
    special: "now",
  },
];

export const BABY = {
  intro:
    "Hơn 7 tháng tuổi — con gái nhỏ đã biết cười khúc khích, biết măm măm ăn dặm, và biết “chinh phục” cả nhà chỉ bằng một chiếc cười trong veo.",
  stats: [
    { value: "2", label: "cái răng sữa đầu tiên" },
    { value: "~8.5kg", label: "cân nặng đáng yêu" },
    { value: "~69cm", label: "chiều cao của bé" },
    { value: "∞", label: "số lần cả nhà bị bé làm tan chảy" },
  ],
  milestones: [
    { time: "Tháng 2", text: "Nụ cười đầu tiên dành riêng cho ba mẹ" },
    { time: "Tháng 4", text: "Biết lật bụng — “cá sấu” tập sự chuyên nghiệp" },
    { time: "Tháng 6", text: "Măm măm dặm: fan cứng của bí đỏ & cà rốt" },
    { time: "Tháng 6+", text: "Chiếc răng sữa đầu tiên nhú lên!" },
    { time: "Tháng 7", text: "Lần đầu gọi “ba… ba…” và “ma…ma…”" },
    { time: "Bây giờ", text: "Tập bò trộm… về phía chậu cây trong phòng khách" },
  ],
};

export type GalleryItem = { image: string; caption: string; tilt: number };

export const GALLERY: GalleryItem[] = [
  { image: "/images/timeline-meeting.png", caption: "Ngày đầu gặp nhau", tilt: -3 },
  { image: "/images/timeline-firstdate.png", caption: "Hẹn hò đầu tiên", tilt: 2.5 },
  { image: "/images/timeline-home.png", caption: "Nhà của mình", tilt: -2 },
  { image: "/images/timeline-babyborn.png", caption: "Chào con!", tilt: 3 },
  { image: "/images/baby-portrait.png", caption: "Bé Bông 7 tháng", tilt: -2.5 },
  { image: "/images/family-portrait.png", caption: "Ba, mẹ và Bông", tilt: 2 },
];

export const LETTER = {
  title: "Bức Thư Nhỏ Gửi Hai Mẹ Con",
  greeting: "Gửi vợ và bé Mít của anh,",
  paragraphs: [
    "Hai năm trước, anh không hề biết rằng một cái gặp gỡ nhỏ có thể đổi đời anh đến thế. Cảm ơn em — vì đã tin, đã ở lại, và đã cùng anh xây nên một mái nhà ấm áp đến vậy.",
    "Và cảm ơn cô con gái nhỏ — vì từ ngày có tiếng bé cười mỗi sáng, mọi mệt mỏi của ba đều tan biến như chưa từng tồn tại.",
    "Hai năm là một dấu mốc thật đẹp, nhưng anh muốn tương lai mới là điều đáng mong chờ nhất: nhiều mùa hoa nở, nhiều chuyến đi xa, và một nhà ba người luôn kề vai bên nhau.",
  ],
  signoff: "Yêu hai mẹ con nhiều hơn ngày hôm qua, ít hơn ngày mai.",
  from: "— Chồng của em & Ba của Mít",
};

export const PROMISES = [
  "Yêu nhau nhiều hơn mỗi ngày một chút ♡",
  "Bé Mít là món quà tuyệt nhất của hai năm này!",
  "Mình sẽ đi thật nhiều nơi cùng nhau nhé!",
  "Cảm ơn vì đã luôn chọn nhau, mỗi ngày.",
  "Nhà mình luôn ấm, đơn giản vì có nhau.",
  "Hai năm — và cả đời nữa, nhé?",
  "Mỗi tối có nhau + bé cười = hạnh phúc trọn vẹn.",
];

export const MARQUEE_WORDS = [
  "yêu thương",
  "gia đình",
  "nụ cười của bé",
  "khoảnh khắc",
  "bên nhau",
  "ấm áp",
  "hạnh phúc",
  "nhà mình",
];
