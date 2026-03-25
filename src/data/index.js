// ============================================================
// ALPHA NDT - Data / Dummy Content
// ============================================================

export const companyInfo = {
  name: "Alpha NDT",
  tagline: "Giải pháp kiểm định không phá hủy hàng đầu",
  subTagline: "Đảm bảo chất lượng – An toàn – Chính xác",
  established: 2002,
  registration: "0306455519",
  address: "37/7 Đường C18, Phường Bảy Hiền, TP. Hồ Chí Minh",
  phone: "+84 28 3815 6789",
  email: "info@alpha-ndt.com",
  website: "www.alpha-ndt.com",
  description:
    "AlphaNDT được thành lập năm 2002, là đơn vị hàng đầu Việt Nam trong lĩnh vực kiểm tra không phá hủy (NDT) và kiểm định công nghiệp. Với hơn 20 năm kinh nghiệm, chúng tôi cung cấp dịch vụ chuyên nghiệp cho các ngành dầu khí, đóng tàu, năng lượng và xây dựng cơ khí.",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100063655170473",
    linkedin: "#",
    youtube: "#",
  },
};

export const stats = [
  { value: "20+", label: "Năm kinh nghiệm" },
  { value: "500+", label: "Dự án hoàn thành" },
  { value: "100+", label: "Chuyên gia NDT" },
  { value: "50+", label: "Đối tác quốc tế" },
];

export const certifications = [
  "ISO 9001:2015",
  "ISO/IEC 17025",
  "PCN Certified",
  "CSWIP Certified",
  "ASNT Certified",
  "ISO 9712",
];

export const classifications = ["ABS", "BV", "ClassNK", "DNV", "KR", "VR"];

export const services = [
  // === INSPECTION SERVICES ===
  {
    id: 1,
    icon: "👁️",
    code: "VT",
    title: "Visual Testing",
    titleVi: "Kiểm tra bằng mắt",
    description:
      "Kiểm tra trực quan sử dụng thiết bị nội soi công nghiệp, camera độ phân giải cao cho các khu vực khó tiếp cận.",
    category: "Inspection Services",
    color: "from-green-600 to-green-800",
  },
  {
    id: 2,
    icon: "🔍",
    code: "WI",
    title: "Welding Inspection",
    titleVi: "Kiểm tra hàn",
    description:
      "Giám sát và kiểm tra chất lượng mối hàn theo tiêu chuẩn quốc tế AWS, ASME, EN. Đảm bảo mối hàn đạt yêu cầu kỹ thuật.",
    category: "Inspection Services",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    id: 3,
    icon: "📋",
    code: "TPI",
    title: "Third Party Inspection",
    titleVi: "Kiểm tra bên thứ ba",
    description:
      "Dịch vụ kiểm tra độc lập, khách quan cho các dự án công nghiệp. Đảm bảo tuân thủ tiêu chuẩn và quy định an toàn.",
    category: "Inspection Services",
    color: "from-lime-600 to-lime-800",
  },
  // === ADVANCED NDT SERVICES ===
  {
    id: 4,
    icon: "📡",
    code: "PAUT",
    title: "Phased Array UT",
    titleVi: "Siêu âm mảng pha",
    description:
      "Công nghệ siêu âm tiên tiến cho phép quét diện rộng, tạo ảnh 2D/3D và phát hiện khuyết tật chính xác hơn UT truyền thống.",
    category: "Advanced NDT Services",
    color: "from-teal-600 to-teal-800",
  },
  {
    id: 5,
    icon: "⚡",
    code: "ECT",
    title: "Eddy Current Testing",
    titleVi: "Kiểm tra dòng điện xoáy",
    description:
      "Kiểm tra ống nhiệt, phát hiện ăn mòn và khuyết tật bề mặt trên vật liệu dẫn điện với tốc độ cao.",
    category: "Advanced NDT Services",
    color: "from-orange-600 to-orange-800",
  },
  {
    id: 6,
    icon: "📊",
    code: "TOFD",
    title: "Time of Flight Diffraction",
    titleVi: "Kỹ thuật TOFD",
    description:
      "Kỹ thuật siêu âm tiên tiến dùng hiện tượng nhiễu xạ để xác định chính xác kích thước và vị trí khuyết tật trong mối hàn.",
    category: "Advanced NDT Services",
    color: "from-violet-600 to-violet-800",
  },
  // === CONVENTIONAL NON-DESTRUCTIVE TESTING ===
  {
    id: 7,
    icon: "🔊",
    code: "UT",
    title: "Ultrasonic Testing",
    titleVi: "Kiểm tra siêu âm",
    description:
      "Phát hiện khuyết tật bên trong vật liệu, đo độ dày thành ống, bồn chứa và cấu kiện kết cấu bằng sóng siêu âm độ chính xác cao.",
    category: "Conventional NDT",
    color: "from-blue-600 to-blue-800",
  },
  {
    id: 8,
    icon: "☢️",
    code: "RT",
    title: "Radiographic Testing",
    titleVi: "Kiểm tra chụp ảnh phóng xạ",
    description:
      "Sử dụng tia X và tia gamma để kiểm tra chất lượng mối hàn, phát hiện lỗ rỗng, tạp chất và các khuyết tật bên trong.",
    category: "Conventional NDT",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    id: 9,
    icon: "🧲",
    code: "MT",
    title: "Magnetic Particle Testing",
    titleVi: "Kiểm tra hạt từ",
    description:
      "Phát hiện các vết nứt và khuyết tật bề mặt trên vật liệu ferromagnetic bằng phương pháp từ trường và bột từ.",
    category: "Conventional NDT",
    color: "from-purple-600 to-purple-800",
  },
  {
    id: 10,
    icon: "💧",
    code: "PT",
    title: "Penetrant Testing",
    titleVi: "Kiểm tra thẩm thấu",
    description:
      "Phát hiện khuyết tật mở ra bề mặt trên mọi loại vật liệu không xốp bằng chất lỏng thẩm thấu màu hoặc huỳnh quang.",
    category: "Conventional NDT",
    color: "from-cyan-600 to-cyan-800",
  },
  // === WIND ENERGY SERVICE (WES) ===
  {
    id: 11,
    icon: "🌬️",
    code: "WES",
    title: "Wind Energy Service",
    titleVi: "Dịch vụ năng lượng gió",
    description:
      "Kiểm tra, bảo dưỡng tuabin gió bằng phương pháp NDT tiên tiến. Dịch vụ toàn diện cho ngành năng lượng tái tạo.",
    category: "Wind Energy Service (WES)",
    color: "from-sky-600 to-sky-800",
  },
  // === WIND TURBINE GEAR OIL EXCHANGE BY GOES ===
  {
    id: 12,
    icon: "⚙️",
    code: "GOES",
    title: "Wind Turbine Gear Oil Exchange by GOES",
    titleVi: "Đổi dầu hộp số tuabin gió bằng GOES",
    description:
      "Dịch vụ đổi dầu hộp số tuabin gió chuyên nghiệp bằng hệ thống GOES, đảm bảo hiệu suất vận hành tối ưu và kéo dài tuổi thọ thiết bị.",
    category: "Wind Turbine Gear Oil Exchange by GOES",
    color: "from-amber-600 to-amber-800",
  },
];

export const projects = [
  {
    id: 1,
    title: "NDT Cho Nhà Máy Khí Việt-Nhật",
    client: "Vietnam-Japan Gas Plant",
    industry: "Oil & Gas",
    description:
      "Hoàn thành kiểm định NDT cho toàn bộ công trình xây dựng nhà máy khí Vietnam-Japan với các phương pháp RT, UT, MT.",
    image: "https://alpha-ndt.com/Upload/37_1.jpg",
    tag: "Oil & Gas",
    year: "2023",
  },
  {
    id: 2,
    title: "Kiểm Tra Thiết Bị Giếng Khoan Schlumberger",
    client: "Schlumberger",
    industry: "Oil & Gas",
    description:
      "Hợp đồng kiểm định thường xuyên thiết bị và dụng cụ giếng khoan dầu bằng MPI, DPI, UT cho Schlumberger.",
    image: "https://alpha-ndt.com/Upload/41_1.jpg",
    tag: "Oil & Gas",
    year: "2022",
  },
  {
    id: 3,
    title: "Đo Độ Dày Thân Tàu Vietsovpetro",
    client: "Vietsovpetro",
    industry: "Marine",
    description:
      "Đo độ dày kết cấu thân tàu LAMSON của Vietsovpetro, thực hiện theo yêu cầu đăng kiểm DNV.",
    image: "https://alpha-ndt.com/Upload/12.jpg",
    tag: "Marine",
    year: "2023",
  },
  {
    id: 4,
    title: "Kiểm Định Nền Tảng C1 & CLPP - JVPC",
    client: "JVPC / PTSC",
    industry: "Oil & Gas",
    description:
      "Kiểm định toàn bộ nền tảng C1, CLPP và cầu nối cho dự án phát triển mỏ Randong của JVPC tại Vũng Tàu.",
    image: "https://alpha-ndt.com/Upload/32.jpg",
    tag: "Oil & Gas",
    year: "2022",
  },
  {
    id: 5,
    title: "NDT Tàu Bulk Carrier 4100 Tấn",
    client: "Pha-Rung Shipyard",
    industry: "Marine",
    description:
      "Cung cấp dịch vụ NDT trong quá trình đóng mới tàu hàng khô Au-Co 1 trọng tải 4100 tấn tại nhà máy đóng tàu Phà Rừng.",
    image: "https://alpha-ndt.com/Upload/36.jpg",
    tag: "Marine",
    year: "2021",
  },
  {
    id: 6,
    title: "Kiểm Tra Ngoài Khơi - PETRONAS Rubi Field",
    client: "PETRONAS / PTSC",
    industry: "Oil & Gas",
    description:
      "Thực hiện kiểm định NDT ngoài khơi cho dự án Rubi-A Gaslift tại mỏ Rubi của PETRONAS, ngoài khơi Việt Nam.",
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Offshore",
    year: "2021",
  },
];

export const whyChooseUs = [
  {
    icon: "🎯",
    title: "Độ Chính Xác Cao",
    description:
      "Thiết bị hiện đại kết hợp đội ngũ chuyên gia được đào tạo bài bản đảm bảo kết quả kiểm định chính xác nhất.",
  },
  {
    icon: "🏆",
    title: "Chuẩn Quốc Tế",
    description:
      "Được chứng nhận ISO 9001, ISO/IEC 17025 và các chứng chỉ PCN, CSWIP, ASNT theo tiêu chuẩn quốc tế.",
  },
  {
    icon: "⚙️",
    title: "Công Nghệ Tiên Tiến",
    description:
      "Liên tục đầu tư vào công nghệ mới: PAUT, TOFD, ECT, AUT... để mang lại dịch vụ tốt nhất cho khách hàng.",
  },
  {
    icon: "🤝",
    title: "Uy Tín 20+ Năm",
    description:
      "Hơn 20 năm phục vụ hàng trăm khách hàng trong nước và quốc tế với mức độ hài lòng cao nhất ngành.",
  },
];

export const news = [
  {
    id: 1,
    title: "AlphaNDT Triển Khai Công Nghệ PAUT Thế Hệ Mới",
    excerpt:
      "AlphaNDT vừa đưa vào ứng dụng hệ thống Phased Array Ultrasonic Testing thế hệ mới, nâng cao đáng kể độ chính xác và tốc độ kiểm định.",
    date: "15/03/2025",
    category: "Công nghệ",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "AlphaNDT Mở Rộng Dịch Vụ Kiểm Tra Tuabin Gió",
    excerpt:
      "Đáp ứng nhu cầu ngày càng tăng của ngành năng lượng tái tạo, AlphaNDT chính thức ra mắt gói dịch vụ Wind Energy Service toàn diện.",
    date: "02/02/2025",
    category: "Dịch vụ",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "AlphaNDT Tái Chứng Nhận ISO 9001:2015 Thành Công",
    excerpt:
      "AlphaNDT đã vượt qua đánh giá và được tái chứng nhận ISO 9001:2015, khẳng định hệ thống quản lý chất lượng đạt chuẩn quốc tế.",
    date: "10/01/2025",
    category: "Chất lượng",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
];

export const partners = [
  { name: "Schlumberger", logo: null },
  { name: "PETRONAS", logo: null },
  { name: "Vietsovpetro", logo: null },
  { name: "PTSC", logo: null },
  { name: "PetroVietnam", logo: null },
  { name: "DNV", logo: null },
  { name: "Bureau Veritas", logo: null },
  { name: "ABS", logo: null },
];

export const jobOpenings = [
  {
    id: 1,
    title: "Kỹ Sư NDT Level II",
    department: "Kỹ thuật",
    location: "TP. Hồ Chí Minh",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Chuyên Gia Kiểm Định Hàn",
    department: "Kỹ thuật",
    location: "Vũng Tàu",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Kỹ Sư PAUT / TOFD",
    department: "Advanced NDT",
    location: "TP. Hồ Chí Minh",
    type: "Full-time",
  },
];
