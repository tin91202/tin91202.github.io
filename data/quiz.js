// ====== 测验题库（每个知识点 1-2 道题）======
// 题型：choice（选择）、fill（填空）、judge（判断）
const QUIZ_DATA = {
  // ==================== 一年级上册 ====================
"mt_g1u_001": [
  { type: "choice", q: "下面哪个数字表示 5 个苹果？", options: ["3", "5", "7", "9"], answer: 1, explain: "5 个苹果用数字 5 表示。" },
  { type: "fill", q: "从 1 数到 5，第 4 个数是（ ）", answer: "4", explain: "1、2、3、4、5，第 4 个是 4。" }
],
"mt_g1u_002": [
  { type: "fill", q: "3 - 3 = （ ）", answer: "0", explain: "3 个去掉 3 个，一个也没有了，是 0。" },
  { type: "fill", q: "5 + 0 = （ ）", answer: "5", explain: "5 加上 0 还是 5。" }
],
"mt_g1u_003": [
  { type: "choice", q: "3 ○ 5，○里应该填什么符号？", options: [">", "<", "=", "≠"], answer: 1, explain: "3 比 5 小，用 < 表示。" },
  { type: "choice", q: "4 ○ 4，○里应该填什么符号？", options: [">", "<", "=", "≠"], answer: 2, explain: "4 和 4 一样大，用 = 表示。" }
],
"mt_g1u_004": [
  { type: "choice", q: "5 只小动物排队，从左数小兔排第 3，从右数小兔排第几？", options: ["第 2", "第 3", "第 4", "第 5"], answer: 1, explain: "5-3+1=3，从右数也是第 3。" },
  { type: "fill", q: "一排有 6 人，小明前面有 2 人，小明后面有（ ）人", answer: "3", explain: "6-2-1=3 人。" }
],
"mt_g1u_005": [
  { type: "fill", q: "5 可以分成 2 和（ ）", answer: "3", explain: "2+3=5。" },
  { type: "fill", q: "4 可以分成 1 和（ ）", answer: "3", explain: "1+3=4。" }
],
"mt_g1u_006": [
  { type: "fill", q: "7 后面的一个数是（ ）", answer: "8", explain: "6、7、8、9，7 后面是 8。" },
  { type: "choice", q: "下面哪个数最大？", options: ["6", "7", "8", "9"], answer: 3, explain: "9 是这几个数中最大的。" }
],
"mt_g1u_007": [
  { type: "fill", q: "8 可以分成 3 和（ ）", answer: "5", explain: "3+5=8。" },
  { type: "fill", q: "9 可以分成 4 和（ ）", answer: "5", explain: "4+5=9。" }
],
"mt_g1u_008": [
  { type: "fill", q: "10 可以分成 6 和（ ）", answer: "4", explain: "6+4=10。" },
  { type: "fill", q: "10 个一是（ ）个十", answer: "1", explain: "10 个一就是 1 个十。" }
],
"mt_g1u_009": [
  { type: "fill", q: "15 是由 1 个十和（ ）个一组成的", answer: "5", explain: "15 = 10 + 5。" },
  { type: "fill", q: "20 是由（ ）个十组成的", answer: "2", explain: "20 = 2 个十。" }
],
"mt_g1u_010": [
  { type: "choice", q: "下面哪个数是双数？", options: ["3", "5", "7", "8"], answer: 3, explain: "8 是双数（偶数）。" },
  { type: "choice", q: "下面哪个数是单数？", options: ["2", "4", "6", "7"], answer: 3, explain: "7 是单数（奇数）。" }
],
"mt_g1u_011": [
  { type: "fill", q: "2 + 3 = （ ）", answer: "5", explain: "2 和 3 合起来是 5。" },
  { type: "fill", q: "1 + 4 = （ ）", answer: "5", explain: "1 和 4 合起来是 5。" }
],
"mt_g1u_012": [
  { type: "fill", q: "5 - 2 = （ ）", answer: "3", explain: "5 去掉 2 剩 3。" },
  { type: "fill", q: "4 - 1 = （ ）", answer: "3", explain: "4 去掉 1 剩 3。" }
],
"mt_g1u_013": [
  { type: "fill", q: "3 + 4 = （ ）", answer: "7", explain: "3 和 4 合起来是 7。" },
  { type: "fill", q: "7 - 3 = （ ）", answer: "4", explain: "7 去掉 3 剩 4。" }
],
"mt_g1u_014": [
  { type: "fill", q: "5 + 4 = （ ）", answer: "9", explain: "5 和 4 合起来是 9。" },
  { type: "fill", q: "9 - 5 = （ ）", answer: "4", explain: "9 去掉 5 剩 4。" }
],
"mt_g1u_015": [
  { type: "fill", q: "7 + （ ）= 10", answer: "3", explain: "7+3=10。" },
  { type: "fill", q: "10 - 4 = （ ）", answer: "6", explain: "10 去掉 4 剩 6。" }
],
"mt_g1u_016": [
  { type: "fill", q: "3 + 2 + 1 = （ ）", answer: "6", explain: "3+2=5，5+1=6。" },
  { type: "fill", q: "7 - 3 - 2 = （ ）", answer: "2", explain: "7-3=4，4-2=2。" }
],
"mt_g1u_017": [
  { type: "fill", q: "6 - 2 + 3 = （ ）", answer: "7", explain: "6-2=4，4+3=7。" },
  { type: "fill", q: "4 + 3 - 2 = （ ）", answer: "5", explain: "4+3=7，7-2=5。" }
],
"mt_g1u_018": [
  { type: "fill", q: "10 + 7 = （ ）", answer: "17", explain: "10 加 7 是 17。" },
  { type: "fill", q: "17 - 7 = （ ）", answer: "10", explain: "17 去掉 7 剩 10。" }
],
"mt_g1u_019": [
  { type: "fill", q: "9 + 5 = （ ）", answer: "14", explain: "凑十法：9+1=10，10+4=14。" },
  { type: "fill", q: "8 + 6 = （ ）", answer: "14", explain: "凑十法：8+2=10，10+4=14。" }
],
"mt_g1u_020": [
  { type: "fill", q: "已知 8 + 6 = 14，那么 6 + 8 = （ ）", answer: "14", explain: "加法交换律，交换加数位置和不变。" },
  { type: "judge", q: "9 + 8 = 8 + 9", answer: true, explain: "加法交换律，两个算式都等于 17。" }
],
"mt_g1u_021": [
  { type: "fill", q: "1 + 1 = （ ）", answer: "2", explain: "1 和 1 合起来是 2。" },
  { type: "fill", q: "9 + 1 = （ ）", answer: "10", explain: "9 和 1 合起来是 10。" }
],
"mt_g1u_022": [
  { type: "fill", q: "9 + 5 = （ ）", answer: "14", explain: "凑十法：9+1=10，10+4=14。" },
  { type: "fill", q: "8 + 7 = （ ）", answer: "15", explain: "凑十法：8+2=10，10+5=15。" }
],
"mt_g1u_023": [
  { type: "choice", q: "下面哪个图形可以滚动？", options: ["长方体", "正方体", "圆柱", "三角形"], answer: 2, explain: "圆柱有曲面，可以滚动。" },
  { type: "choice", q: "正方体有几个面？", options: ["4 个", "5 个", "6 个", "8 个"], answer: 2, explain: "正方体有 6 个面。" }
],
"mt_g1u_024": [
  { type: "judge", q: "2 个正方体可以拼成一个长方体。", answer: true, explain: "2 个一样的正方体拼起来是长方体。" },
  { type: "choice", q: "2 个圆柱拼起来是什么形状？", options: ["正方体", "更大的圆柱", "球", "长方体"], answer: 1, explain: "2 个一样的圆柱拼起来是更大的圆柱。" }
],
"mt_g1u_025": [
  { type: "fill", q: "树上有 9 只小鸟，飞走了 4 只，还剩（ ）只", answer: "5", explain: "9 - 4 = 5 只。" },
  { type: "fill", q: "小明有 5 支铅笔，又买来 3 支，一共有（ ）支", answer: "8", explain: "5 + 3 = 8 支。" }
],
"mt_g1u_026": [
  { type: "fill", q: "小明有 5 支铅笔，又买来 3 支，一共有（ ）支", answer: "8", explain: "5 + 3 = 8 支。" },
  { type: "fill", q: "盘子里有 7 个橘子，吃掉 2 个，还剩（ ）个", answer: "5", explain: "7 - 2 = 5 个。" }
],
"mt_g1u_027": [
  { type: "choice", q: "你的左手在哪边？", options: ["左边", "右边", "前面", "后面"], answer: 0, explain: "左手在左边。" },
  { type: "choice", q: "上课时，老师站在你的哪边？", options: ["前面", "后面", "左边", "右边"], answer: 0, explain: "老师通常站在学生前面。" }
],
"mt_g1u_028": [
  { type: "fill", q: "在数轴上，8 后面的一个数是（ ）", answer: "9", explain: "8 后面是 9。" },
  { type: "fill", q: "比 8 小 1 的数是（ ）", answer: "7", explain: "8 - 1 = 7。" }
],
"mt_g1u_029": [
  { type: "fill", q: "计数器上十位拨 3 个珠，个位拨 5 个珠，表示的数是（ ）", answer: "35", explain: "3 个十和 5 个一组成 35。" },
  { type: "fill", q: "18 的十位是（ ），个位是（ ）。填两个数字用逗号分隔", answer: "1,8", explain: "18 = 1 个十和 8 个一。" }
],
"mt_g1u_030": [
  { type: "fill", q: "一排有 10 人，小明左边有 3 人，小明右边有（ ）人", answer: "6", explain: "10-3-1=6 人。" },
  { type: "choice", q: "从左边数小明排第 4，从右边数他排第 7，这一排一共有多少人？", options: ["10 人", "11 人", "12 人", "13 人"], answer: 0, explain: "4+7-1=10 人。" }
],

// ==================== 二年级上册 ====================
"mt_g2u_001": [
  { type: "choice", q: "把苹果按颜色分类，这是按什么标准分类？", options: ["形状", "颜色", "大小", "味道"], answer: 1, explain: "按颜色分类就是按颜色这个标准。" },
  { type: "judge", q: "分类时只能按一个标准分。", answer: false, explain: "可以按不同标准分类，结果会不同。" }
],
"mt_g2u_002": [
  { type: "choice", q: "同一组图形，按颜色分和按形状分，结果会怎样？", options: ["一样", "不一样", "无法确定", "有时一样"], answer: 1, explain: "标准不同，分类结果不同。" },
  { type: "judge", q: "先按颜色分，再按形状分，这叫二次分类。", answer: true, explain: "这是二次分类（多标准分类）。" }
],
"mt_g2u_003": [
  { type: "fill", q: "3 + 3 + 3 + 3 = （ ）×（ ）。填两个数字用逗号分隔", answer: "3,4", explain: "4 个 3 相加可以写成 3×4。" },
  { type: "fill", q: "5 × 6 读作（ ）乘（ ）。填两个数字用逗号分隔", answer: "5,6", explain: "5×6 读作 5 乘 6。" }
],
"mt_g2u_004": [
  { type: "fill", q: "5 × 7 = （ ）", answer: "35", explain: "五七三十五。" },
  { type: "fill", q: "5 × 9 = （ ）", answer: "45", explain: "五九四十五。" }
],
"mt_g2u_005": [
  { type: "fill", q: "3 × 4 = （ ）", answer: "12", explain: "三四十二。" },
  { type: "fill", q: "2 × 8 = （ ）", answer: "16", explain: "二八十六。" }
],
"mt_g2u_006": [
  { type: "fill", q: "1 × 9 = （ ）", answer: "9", explain: "1 乘任何数得任何数。" },
  { type: "fill", q: "6 × 7 = （ ）", answer: "42", explain: "六七四十二。" }
],
"mt_g2u_007": [
  { type: "fill", q: "3 × 4 + 5 = （ ）", answer: "17", explain: "先算乘法：3×4=12，再算加法：12+5=17。" },
  { type: "fill", q: "2 × 6 - 3 = （ ）", answer: "9", explain: "先算乘法：2×6=12，再算减法：12-3=9。" }
],
"mt_g2u_008": [
  { type: "fill", q: "每盒有 6 个苹果，4 盒一共有（ ）个", answer: "24", explain: "6×4=24 个。" },
  { type: "fill", q: "每支铅笔 2 元，买 7 支要（ ）元", answer: "14", explain: "2×7=14 元。" }
],
"mt_g2u_009": [
  { type: "fill", q: "根据口诀「五六三十」，写出乘法算式：5 × 6 = （ ）", answer: "30", explain: "五六三十。" },
  { type: "fill", q: "根据口诀「四八三十二」，4 × 8 = （ ）", answer: "32", explain: "四八三十二。" }
],
"mt_g2u_010": [
  { type: "judge", q: "把 12 个苹果分成 3 份，每份一定是 4 个。", answer: false, explain: "只有平均分才是每份 4 个。" },
  { type: "choice", q: "什么是平均分？", options: ["每份不一样多", "每份同样多", "随便分", "分成两份"], answer: 1, explain: "平均分就是每份分得同样多。" }
],
"mt_g2u_011": [
  { type: "fill", q: "12 ÷ 3 = （ ），读作十二除以三", answer: "4", explain: "12÷3=4。" },
  { type: "fill", q: "在 15 ÷ 3 = 5 中，15 叫（ ），3 叫（ ），5 叫（ ）", answer: "被除数,除数,商", explain: "除法算式各部分的名称。" }
],
"mt_g2u_012": [
  { type: "fill", q: "18 ÷ 3 = （ ），想：三六十八", answer: "6", explain: "用乘法口诀求商。" },
  { type: "fill", q: "24 ÷ 6 = （ ），想：四六二十四", answer: "4", explain: "用乘法口诀求商。" }
],
"mt_g2u_013": [
  { type: "fill", q: "把 20 个苹果平均放在 4 个盘子里，每盘（ ）个", answer: "5", explain: "20÷4=5 个。" },
  { type: "fill", q: "20 个苹果，每盘放 5 个，可以放（ ）盘", answer: "4", explain: "20÷5=4 盘。" }
],
"mt_g2u_014": [
  { type: "fill", q: "5 ÷ 5 = （ ）", answer: "1", explain: "相同的两个数相除得 1。" },
  { type: "fill", q: "7 ÷ 1 = （ ）", answer: "7", explain: "任何数除以 1 得它本身。" }
],
"mt_g2u_015": [
  { type: "choice", q: "早晨太阳从哪个方向升起？", options: ["东", "南", "西", "北"], answer: 0, explain: "太阳从东方升起。" },
  { type: "choice", q: "东和西是什么关系？", options: ["相对", "相邻", "相同", "垂直"], answer: 0, explain: "东西相对，南北相对。" }
],
"mt_g2u_016": [
  { type: "choice", q: "地图上通常上面是什么方向？", options: ["南", "北", "东", "西"], answer: 1, explain: "地图上北下南，左西右东。" },
  { type: "fill", q: "地图上的左面是（ ）方向", answer: "西", explain: "上北下南，左西右东。" }
],
"mt_g2u_017": [
  { type: "fill", q: "1 厘米约等于（ ）的宽度。填一个身体部位", answer: "食指", explain: "食指宽约 1 厘米。" },
  { type: "fill", q: "测量铅笔长度，左端对准直尺的（ ）刻度", answer: "0", explain: "测量时左端对准 0 刻度。" }
],
"mt_g2u_018": [
  { type: "fill", q: "1 米 = （ ）厘米", answer: "100", explain: "1 米 = 100 厘米。" },
  { type: "choice", q: "教室的门高约 2（ ）", options: ["厘米", "米", "分米", "毫米"], answer: 1, explain: "门的高度用米作单位。" }
],
"mt_g2u_019": [
  { type: "judge", q: "线段有两个端点，可以测量长度。", answer: true, explain: "线段的特征：直的两个端点，可测量。" },
  { type: "fill", q: "画一条 5 厘米长的线段，从（ ）刻度画到（ ）刻度。填两个数字用逗号分隔", answer: "0,5", explain: "从 0 画到 5 就是 5 厘米。" }
],
"mt_g2u_020": [
  { type: "fill", q: "一拃约长 15（ ）", answer: "厘米", explain: "一拃约 15 厘米。" },
  { type: "judge", q: "用身体测量比用尺子测量更标准。", answer: false, explain: "标准单位更准确。" }
],
"mt_g2u_021": [
  { type: "fill", q: "7 × 8 = （ ）", answer: "56", explain: "七八五十六。" },
  { type: "fill", q: "7 × 9 = （ ）", answer: "63", explain: "七九六十三。" }
],
"mt_g2u_022": [
  { type: "fill", q: "8 × 7 = （ ）", answer: "56", explain: "七八五十六。" },
  { type: "fill", q: "8 × 8 = （ ）", answer: "64", explain: "八八六十四。" }
],
"mt_g2u_023": [
  { type: "fill", q: "9 × 9 = （ ）", answer: "81", explain: "九九八十一。" },
  { type: "fill", q: "9 × 7 = （ ）", answer: "63", explain: "七九六十三。" }
],
"mt_g2u_024": [
  { type: "fill", q: "63 ÷ 7 = （ ）", answer: "9", explain: "七九六十三。" },
  { type: "fill", q: "72 ÷ 8 = （ ）", answer: "9", explain: "八九七十二。" }
],
"mt_g2u_025": [
  { type: "fill", q: "6 × 7 = （ ）", answer: "42", explain: "六七四十二。" },
  { type: "fill", q: "8 × 9 = （ ）", answer: "72", explain: "八九七十二。" }
],
"mt_g2u_026": [
  { type: "fill", q: "商店有 4 盒铅笔，每盒 8 支，平均分给 8 个小朋友，每人（ ）支", answer: "4", explain: "4×8=32，32÷8=4 支。" },
  { type: "fill", q: "每袋有 5 个橘子，6 袋一共有（ ）个", answer: "30", explain: "5×6=30 个。" }
],
"mt_g2u_027": [
  { type: "fill", q: "乘法是（ ）加法的简便运算", answer: "相同", explain: "乘法是求几个相同加数和的简便运算。" },
  { type: "judge", q: "除法是乘法的逆运算。", answer: true, explain: "乘法和除法互为逆运算。" }
],
"mt_g2u_028": [
  { type: "fill", q: "每份数 × 份数 = （ ）", answer: "总数", explain: "每份数×份数=总数。" },
  { type: "fill", q: "总数 ÷ 每份数 = （ ）", answer: "份数", explain: "总数÷每份数=份数。" }
],
"mt_g2u_029": [
  { type: "choice", q: "看疏散示意图时，通常上面是什么方向？", options: ["南", "北", "东", "西"], answer: 1, explain: "地图通常上北下南。" },
  { type: "judge", q: "分类整理数据时，可以按多种标准分类。", answer: true, explain: "可以按不同标准分类。" }
],
"mt_g2u_030": [
  { type: "fill", q: "3 × 3 = （ ）", answer: "9", explain: "三三得九。" },
  { type: "fill", q: "4 × 4 = （ ）", answer: "16", explain: "四四十六。" }
],

// ==================== 二年级下册 ====================
"mt_g2d_001": [
  { type: "fill", q: "钟面上有（ ）根针", answer: "3", explain: "时针、分针、秒针共 3 根。" },
  { type: "fill", q: "1 时 = （ ）分", answer: "60", explain: "1 时 = 60 分。" }
],
"mt_g2d_002": [
  { type: "fill", q: "3 时 25 分，分针指向（ ）", answer: "5", explain: "25 分，分针指向 5。" },
  { type: "fill", q: "时针在 3 和 4 之间，分针指向 6，是（ ）时（ ）分。填两个数字用逗号分隔", answer: "3,30", explain: "3 时 30 分。" }
],
"mt_g2d_003": [
  { type: "fill", q: "从 8:00 到 9:30 经过了（ ）小时（ ）分。填两个数字用逗号分隔", answer: "1,30", explain: "1 小时 30 分钟。" },
  { type: "fill", q: "一节课 40 分钟，8:00 上课，（ ）下课。填时间", answer: "8:40", explain: "8:00 + 40 分 = 8:40。" }
],
"mt_g2d_004": [
  { type: "fill", q: "13 ÷ 5 = （ ）……（ ）。填两个数字用逗号分隔", answer: "2,3", explain: "13÷5=2 余 3。" },
  { type: "judge", q: "余数必须小于除数。", answer: true, explain: "余数一定比除数小。" }
],
"mt_g2d_005": [
  { type: "fill", q: "在除法竖式中，被除数 = 除数 × 商 + （ ）", answer: "余数", explain: "被除数=除数×商+余数。" },
  { type: "fill", q: "28 ÷ 6 = 4……（ ）", answer: "4", explain: "6×4=24，28-24=4。" }
],
"mt_g2d_006": [
  { type: "fill", q: "35 ÷ 8 = （ ）……（ ）。填两个数字用逗号分隔", answer: "4,3", explain: "8×4=32，35-32=3。" },
  { type: "fill", q: "试商时，想 8 × （ ）最接近 35 且不超过 35", answer: "4", explain: "8×4=32 最接近 35。" }
],
"mt_g2d_007": [
  { type: "fill", q: "22 个苹果，每 5 个装一袋，可以装（ ）袋，还剩（ ）个。填两个数字用逗号分隔", answer: "4,2", explain: "22÷5=4 袋余 2 个。" },
  { type: "fill", q: "按照「红黄蓝红黄蓝…」排列，第 10 个是（ ）色", answer: "红", explain: "10÷3=3 余 1，第 1 个是红色。" }
],
"mt_g2d_008": [
  { type: "fill", q: "8 是 4 的（ ）倍", answer: "2", explain: "8÷4=2。" },
  { type: "fill", q: "12 是 3 的（ ）倍", answer: "4", explain: "12÷3=4。" }
],
"mt_g2d_009": [
  { type: "fill", q: "24 是 6 的（ ）倍", answer: "4", explain: "24÷6=4。" },
  { type: "fill", q: "45 是 9 的（ ）倍", answer: "5", explain: "45÷9=5。" }
],
"mt_g2d_010": [
  { type: "fill", q: "7 的 4 倍是（ ）", answer: "28", explain: "7×4=28。" },
  { type: "fill", q: "9 的 3 倍是（ ）", answer: "27", explain: "9×3=27。" }
],
"mt_g2d_011": [
  { type: "fill", q: "小明有 8 个苹果，小红有 4 个，小明比小红多（ ）个", answer: "4", explain: "8-4=4 个。" },
  { type: "fill", q: "小明的苹果是小红的（ ）倍", answer: "2", explain: "8÷4=2。" }
],
"mt_g2d_012": [
  { type: "fill", q: "356 是由 3 个百、5 个十和（ ）个一组成的", answer: "6", explain: "356=300+50+6。" },
  { type: "fill", q: "10 个百是（ ）", answer: "1000", explain: "10 个百是 1 个千。" }
],
"mt_g2d_013": [
  { type: "fill", q: "4080 读作（ ）", answer: "四千零八十", explain: "中间一个 0 读一个零，末尾 0 不读。" },
  { type: "fill", q: "5007 读作（ ）", answer: "五千零七", explain: "中间两个 0 只读一个零。" }
],
"mt_g2d_014": [
  { type: "fill", q: "算盘上一个上珠表示（ ）", answer: "5", explain: "上珠表示 5，下珠表示 1。" },
  { type: "fill", q: "3890 ≈ （ ）千", answer: "4", explain: "3890 接近 4000。" }
],
"mt_g2d_015": [
  { type: "choice", q: "9999 和 10000 比，哪个大？", options: ["9999", "10000", "一样大", "无法比较"], answer: 1, explain: "10000 是五位数，9999 是四位数。" },
  { type: "fill", q: "比较 4567 和 4576，（ ）大", answer: "4576", explain: "十位 7>6，所以 4576 大。" }
],
"mt_g2d_016": [
  { type: "fill", q: "358 + 267 = （ ）", answer: "625", explain: "个位 8+7=15 写 5 进 1，十位 5+6+1=12 写 2 进 1，百位 3+2+1=6。" },
  { type: "fill", q: "456 + 378 = （ ）", answer: "834", explain: "个位 6+8=14 写 4 进 1，十位 5+7+1=13 写 3 进 1，百位 4+3+1=8。" }
],
"mt_g2d_017": [
  { type: "fill", q: "4567 + 2890 = （ ）", answer: "7457", explain: "个位 7+0=7，十位 6+9=15 写 5 进 1，百位 5+8+1=14 写 4 进 1，千位 4+2+1=7。" },
  { type: "judge", q: "验算加法可以交换加数位置再算一遍。", answer: true, explain: "加法验算方法：交换加数位置。" }
],
"mt_g2d_018": [
  { type: "fill", q: "502 - 178 = （ ）", answer: "324", explain: "个位 2-8 不够，从十位退 1：12-8=4；十位 0-1 不够，从百位退 1：10-1-7=2；百位 5-1-1=3。" },
  { type: "fill", q: "800 - 356 = （ ）", answer: "444", explain: "个位 0-6 不够，从十位退 1：10-6=4；十位 0-1 不够，从百位退 1：10-1-5=4；百位 8-1-3=4。" }
],
"mt_g2d_019": [
  { type: "fill", q: "验算减法用（ ）法", answer: "加", explain: "用差+减数=被除数来验算。" },
  { type: "fill", q: "被减数 - 减数 = （ ）", answer: "差", explain: "减法各部分关系。" }
],
"mt_g2d_020": [
  { type: "fill", q: "398 + 502 ≈ （ ）", answer: "900", explain: "398≈400，502≈500，400+500=900。" },
  { type: "fill", q: "估算 705 - 298 ≈ （ ）", answer: "400", explain: "705≈700，298≈300，700-300=400。" }
],
"mt_g2d_021": [
  { type: "fill", q: "商店上午卖出 256 元，下午比上午多卖 78 元，这一天一共卖了（ ）元", answer: "590", explain: "下午：256+78=334，一共：256+334=590 元。" },
  { type: "fill", q: "小明有 350 元，买书包用去 180 元，买文具用去 95 元，还剩（ ）元", answer: "75", explain: "350-180-95=75 元。" }
],
"mt_g2d_022": [
  { type: "choice", q: "数独游戏中，每行每列每个宫的数字有什么要求？", options: ["可以重复", "不能重复", "必须相同", "随意"], answer: 1, explain: "数独每行每列每宫数字不重复。" },
  { type: "judge", q: "4×4 数独中，每行有 4 个数字。", answer: true, explain: "4×4 数独每行 4 个数。" }
],
"mt_g2d_023": [
  { type: "fill", q: "万以内加减法和百以内加减法的相同点是（ ）数位对齐", answer: "相同", explain: "都要相同数位对齐。" },
  { type: "judge", q: "万以内加减法需要进位退位，百以内不需要。", answer: false, explain: "百以内也可能需要进位退位。" }
],
"mt_g2d_024": [
  { type: "judge", q: "数学连环画可以把数学知识画成故事。", answer: true, explain: "连环画是综合应用形式。" },
  { type: "choice", q: "创作数学连环画需要什么？", options: ["数学知识", "绘画", "故事", "以上都要"], answer: 3, explain: "需要数学知识、绘画和故事。" }
],
"mt_g2d_025": [
  { type: "fill", q: "万以内数的认识包括数数、组成、读写、比大小和（ ）", answer: "近似数", explain: "万以内数的内容。" },
  { type: "judge", q: "有余数除法和无余数除法都是除法。", answer: true, explain: "都是除法运算。" }
],
"mt_g2d_026": [
  { type: "fill", q: "分析数量关系时，可以用（ ）图", answer: "线段", explain: "线段图是分析工具。" },
  { type: "fill", q: "倍的关系中，一定要分清以谁为（ ）", answer: "标准", explain: "要分清标准量（1 份）。" }
],
"mt_g2d_027": [
  { type: "fill", q: "综合运用知识解决问题时，先（ ）题意", answer: "理解", explain: "先阅读理解题意。" },
  { type: "judge", q: "解决综合应用题只需要一种运算。", answer: false, explain: "通常需要多种运算。" }
],
"mt_g2d_028": [
  { type: "fill", q: "3005 读作（ ）", answer: "三千零五", explain: "中间两个 0 只读一个零。" },
  { type: "fill", q: "5600 读作（ ）", answer: "五千六百", explain: "末尾两个 0 不读。" }
],

// ==================== 三年级上册 ====================
"mt_g3u_001": [
  { type: "choice", q: "从正面看一个正方体，看到的是什么形状？", options: ["圆形", "正方形", "三角形", "长方形"], answer: 1, explain: "正方体从任何方向看都是正方形。" },
  { type: "judge", q: "从不同方向看同一个物体，形状一定相同。", answer: false, explain: "不同方向看到的形状可能不同。" }
],
"mt_g3u_002": [
  { type: "choice", q: "一个长方体（长比宽大），从侧面看是什么形状？", options: ["正方形", "长方形", "圆形", "三角形"], answer: 1, explain: "从侧面看通常还是长方形。" },
  { type: "judge", q: "根据观察方向可以判断看到的图形。", answer: true, explain: "方向和看到的形状对应。" }
],
"mt_g3u_003": [
  { type: "choice", q: "3 个小正方体摆成 L 形，从正面看是什么形状？", options: ["L 形", "一字形", "T 形", "正方形"], answer: 0, explain: "从正面看是 L 形。" },
  { type: "judge", q: "从不同方向观察立体图形，看到的平面图形可能不同。", answer: true, explain: "观察方向不同，形状可能不同。" }
],
"mt_g3u_004": [
  { type: "fill", q: "5 + 3 × 4 = （ ）", answer: "17", explain: "先算乘法：3×4=12，再算加法：5+12=17。" },
  { type: "fill", q: "20 - 6 ÷ 2 = （ ）", answer: "17", explain: "先算除法：6÷2=3，再算减法：20-3=17。" }
],
"mt_g3u_005": [
  { type: "fill", q: "(7 + 5) × 3 = （ ）", answer: "36", explain: "先算括号：7+5=12，再算乘法：12×3=36。" },
  { type: "fill", q: "(20 - 8) ÷ 4 = （ ）", answer: "3", explain: "先算括号：20-8=12，再算除法：12÷4=3。" }
],
"mt_g3u_006": [
  { type: "fill", q: "小明买了 3 本笔记本每本 5 元，又买了一支钢笔 8 元，一共花了（ ）元", answer: "23", explain: "3×5+8=23 元。" },
  { type: "fill", q: "每盒有 6 支铅笔，买了 4 盒，用去 10 支，还剩（ ）支", answer: "14", explain: "6×4-10=14 支。" }
],
"mt_g3u_007": [
  { type: "fill", q: "1 厘米 = （ ）毫米", answer: "10", explain: "1 厘米 = 10 毫米。" },
  { type: "fill", q: "橡皮厚约 10（ ）", answer: "毫米", explain: "橡皮厚度用毫米。" }
],
"mt_g3u_008": [
  { type: "fill", q: "1 分米 = （ ）厘米", answer: "10", explain: "1 分米 = 10 厘米。" },
  { type: "fill", q: "1 米 = （ ）分米", answer: "10", explain: "1 米 = 10 分米。" }
],
"mt_g3u_009": [
  { type: "fill", q: "1 千米 = （ ）米", answer: "1000", explain: "1 千米 = 1000 米。" },
  { type: "choice", q: "从学校到家约 2（ ）", options: ["米", "千米", "厘米", "毫米"], answer: 1, explain: "距离较远用千米。" }
],
"mt_g3u_010": [
  { type: "fill", q: "5 千米 = （ ）米", answer: "5000", explain: "5×1000=5000 米。" },
  { type: "fill", q: "80 毫米 = （ ）厘米", answer: "8", explain: "80÷10=8 厘米。" }
],
"mt_g3u_011": [
  { type: "fill", q: "1 千克 = （ ）克", answer: "1000", explain: "1 千克 = 1000 克。" },
  { type: "choice", q: "一个苹果约重 200（ ）", options: ["千克", "克", "吨", "斤"], answer: 1, explain: "苹果重量用克。" }
],
"mt_g3u_012": [
  { type: "fill", q: "1 吨 = （ ）千克", answer: "1000", explain: "1 吨 = 1000 千克。" },
  { type: "choice", q: "一辆卡车载重约 5（ ）", options: ["千克", "克", "吨", "斤"], answer: 2, explain: "卡车载重用吨。" }
],
"mt_g3u_013": [
  { type: "fill", q: "3 吨 = （ ）千克", answer: "3000", explain: "3×1000=3000 千克。" },
  { type: "fill", q: "5000 克 = （ ）千克", answer: "5", explain: "5000÷1000=5 千克。" }
],
"mt_g3u_014": [
  { type: "fill", q: "30 × 5 = （ ）", answer: "150", explain: "3×5=15，再添一个 0。" },
  { type: "fill", q: "200 × 4 = （ ）", answer: "800", explain: "2×4=8，再添两个 0。" }
],
"mt_g3u_015": [
  { type: "fill", q: "213 × 3 = （ ）", answer: "639", explain: "3×3=9，3×1=3，3×2=6。" },
  { type: "fill", q: "124 × 2 = （ ）", answer: "248", explain: "2×4=8，2×2=4，2×1=2。" }
],
"mt_g3u_016": [
  { type: "fill", q: "156 × 4 = （ ）", answer: "624", explain: "4×6=24 写 4 进 2，4×5+2=22 写 2 进 2，4×1+2=6。" },
  { type: "fill", q: "238 × 3 = （ ）", answer: "714", explain: "3×8=24 写 4 进 2，3×3+2=11 写 1 进 1，3×2+1=7。" }
],
"mt_g3u_017": [
  { type: "fill", q: "305 × 6 = （ ）", answer: "1830", explain: "6×5=30 写 0 进 3，6×0+3=3，6×3=18。" },
  { type: "fill", q: "240 × 3 = （ ）", answer: "720", explain: "3×0=0，3×4=12 写 2 进 1，3×2+1=7。" }
],
"mt_g3u_018": [
  { type: "fill", q: "198 × 31 ≈ （ ）", answer: "6000", explain: "198≈200，31≈30，200×30=6000。" },
  { type: "judge", q: "估算时把因数看成接近的整十整百数。", answer: true, explain: "这是估算的基本方法。" }
],
"mt_g3u_019": [
  { type: "fill", q: "学校买了 4 箱矿泉水，每箱 24 瓶，一共有（ ）瓶", answer: "96", explain: "24×4=96 瓶。" },
  { type: "fill", q: "每排有 28 人，站了 6 排，一共有（ ）人", answer: "168", explain: "28×6=168 人。" }
],
"mt_g3u_020": [
  { type: "fill", q: "身份证号码第 7-14 位表示（ ）", answer: "出生日期", explain: "7-14 位是出生日期码。" },
  { type: "fill", q: "邮政编码有（ ）位数字", answer: "6", explain: "中国邮政编码是 6 位。" }
],
"mt_g3u_021": [
  { type: "judge", q: "编码方案要体现唯一性和合理性。", answer: true, explain: "编码的基本原则。" },
  { type: "choice", q: "设计学号时，可以包含什么信息？", options: ["班级", "性别", "入学年份", "以上都可以"], answer: 3, explain: "学号可以包含多种信息。" }
],
"mt_g3u_022": [
  { type: "choice", q: "线段有几个端点？", options: ["0 个", "1 个", "2 个", "无数个"], answer: 2, explain: "线段有 2 个端点。" },
  { type: "choice", q: "直线有几个端点？", options: ["0 个", "1 个", "2 个", "无数个"], answer: 0, explain: "直线没有端点。" }
],
"mt_g3u_023": [
  { type: "fill", q: "角由（ ）个顶点和（ ）条边组成。填两个数字用逗号分隔", answer: "1,2", explain: "角有 1 个顶点 2 条边。" },
  { type: "judge", q: "角的大小与边的长短有关。", answer: false, explain: "角的大小与张口有关，与边长无关。" }
],
"mt_g3u_024": [
  { type: "choice", q: "比直角小的角叫什么角？", options: ["锐角", "直角", "钝角", "平角"], answer: 0, explain: "比直角小的是锐角。" },
  { type: "choice", q: "比直角大的角叫什么角？", options: ["锐角", "直角", "钝角", "周角"], answer: 2, explain: "比直角大（小于 180°）的是钝角。" }
],
"mt_g3u_025": [
  { type: "judge", q: "用三角尺可以画出直角。", answer: true, explain: "三角尺有直角。" },
  { type: "fill", q: "用三角尺画一个 90° 的角，这是（ ）角", answer: "直", explain: "90° 是直角。" }
],
"mt_g3u_026": [
  { type: "fill", q: "把一个饼平均分成 4 份，每份是（ ）分之一", answer: "四", explain: "平均分成 4 份，每份是四分之一。" },
  { type: "fill", q: "1/2 读作（ ）", answer: "二分之一", explain: "分数的读法。" }
],
"mt_g3u_027": [
  { type: "fill", q: "5/8 的分子是（ ），分母是（ ）。填两个数字用逗号分隔", answer: "5,8", explain: "分数线上面是分子，下面是分母。" },
  { type: "fill", q: "一条彩带平均分成 5 段，取 3 段是这条彩带的（ ）分之（ ）", answer: "五,三", explain: "是五分之三。" }
],
"mt_g3u_028": [
  { type: "choice", q: "2/5 和 4/5 比，哪个大？", options: ["2/5", "4/5", "一样大", "无法比较"], answer: 1, explain: "分母相同，分子大的分数大。" },
  { type: "choice", q: "1/3 和 1/6 比，哪个大？", options: ["1/3", "1/6", "一样大", "无法比较"], answer: 0, explain: "分子相同，分母小的分数大。" }
],
"mt_g3u_029": [
  { type: "fill", q: "1/6 + 3/6 = （ ）", answer: "4/6", explain: "同分母分数相加，分子相加，分母不变。" },
  { type: "fill", q: "5/8 - 2/8 = （ ）", answer: "3/8", explain: "同分母分数相减，分子相减，分母不变。" }
],
"mt_g3u_030": [
  { type: "fill", q: "一天有 24 小时，上课 6 小时，上课时间占一天的（ ）分之（ ）", answer: "四,一", explain: "6/24=1/4。" },
  { type: "judge", q: "分数可以表示生活中的部分与整体关系。", answer: true, explain: "分数的意义。" }
],

// ==================== 三年级下册 ====================
"mt_g3d_001": [
  { type: "choice", q: "下面哪个图形是轴对称图形？", options: ["三角形", "正方形", "平行四边形", "梯形"], answer: 1, explain: "正方形沿对角线对折两边完全重合。" },
  { type: "judge", q: "轴对称图形沿对称轴对折后两边完全重合。", answer: true, explain: "这是轴对称图形的定义。" }
],
"mt_g3d_002": [
  { type: "judge", q: "平移只改变图形的位置，不改变形状和大小。", answer: true, explain: "平移的特征。" },
  { type: "fill", q: "将三角形向右平移 5 格，图形的（ ）不变。填形状或大小", answer: "形状和大小", explain: "平移不改变形状和大小。" }
],
"mt_g3d_003": [
  { type: "choice", q: "钟表指针的运动是什么现象？", options: ["平移", "旋转", "对称", "放大"], answer: 1, explain: "指针绕中心转动是旋转。" },
  { type: "choice", q: "推拉抽屉是什么现象？", options: ["平移", "旋转", "对称", "放大"], answer: 0, explain: "抽屉沿直线移动是平移。" }
],
"mt_g3d_004": [
  { type: "fill", q: "60 ÷ 3 = （ ）", answer: "20", explain: "6÷3=2，再添一个 0。" },
  { type: "fill", q: "800 ÷ 4 = （ ）", answer: "200", explain: "8÷4=2，再添两个 0。" }
],
"mt_g3d_005": [
  { type: "fill", q: "84 ÷ 4 = （ ）", answer: "21", explain: "8÷4=2，4÷4=1。" },
  { type: "fill", q: "96 ÷ 3 = （ ）", answer: "32", explain: "9÷3=3，6÷3=2。" }
],
"mt_g3d_006": [
  { type: "fill", q: "618 ÷ 3 = （ ）", answer: "206", explain: "6÷3=2，1÷3 不够商 0，18÷3=6。" },
  { type: "fill", q: "408 ÷ 4 = （ ）", answer: "102", explain: "4÷4=1，0÷4=0，8÷4=2。" }
],
"mt_g3d_007": [
  { type: "fill", q: "325 ÷ 5 = （ ），验算：65 × 5 = （ ）", answer: "65,325", explain: "商×除数=被除数。" },
  { type: "judge", q: "有余数除法验算：商×除数+余数=被除数。", answer: true, explain: "有余数除法的验算方法。" }
],
"mt_g3d_008": [
  { type: "fill", q: "185 ÷ 4 ≈ （ ）", answer: "50", explain: "185≈200，200÷4=50。" },
  { type: "fill", q: "把 185 本书平均分给 4 个班，每班大约分到（ ）本", answer: "50", explain: "估算结果。" }
],
"mt_g3d_009": [
  { type: "fill", q: "长方形有（ ）条边，对边（ ）", answer: "4,相等", explain: "长方形有 4 条边，对边相等。" },
  { type: "judge", q: "正方形是特殊的长方形。", answer: true, explain: "正方形满足长方形所有条件。" }
],
"mt_g3d_010": [
  { type: "fill", q: "封闭图形一周的长度叫（ ）", answer: "周长", explain: "周长的定义。" },
  { type: "judge", q: "周长只有长方形和正方形才有。", answer: false, explain: "所有封闭图形都有周长。" }
],
"mt_g3d_011": [
  { type: "fill", q: "长方形长 8 厘米，宽 5 厘米，周长是（ ）厘米", answer: "26", explain: "(8+5)×2=26 厘米。" },
  { type: "fill", q: "正方形边长 6 厘米，周长是（ ）厘米", answer: "24", explain: "6×4=24 厘米。" }
],
"mt_g3d_012": [
  { type: "fill", q: "物体表面或封闭图形的大小叫（ ）", answer: "面积", explain: "面积的定义。" },
  { type: "judge", q: "周长和面积是一样的。", answer: false, explain: "周长是长度，面积是大小，不一样。" }
],
"mt_g3d_013": [
  { type: "fill", q: "1 平方分米 = （ ）平方厘米", answer: "100", explain: "1dm²=100cm²。" },
  { type: "fill", q: "1 平方米 = （ ）平方分米", answer: "100", explain: "1m²=100dm²。" }
],
"mt_g3d_014": [
  { type: "fill", q: "长方形长 6 米，宽 4 米，面积是（ ）平方米", answer: "24", explain: "6×4=24 平方米。" },
  { type: "fill", q: "正方形边长 3 分米，面积是（ ）平方分米", answer: "9", explain: "3×3=9 平方分米。" }
],
"mt_g3d_015": [
  { type: "fill", q: "身份证号码共（ ）位", answer: "18", explain: "身份证是 18 位。" },
  { type: "fill", q: "身份证第 17 位表示（ ）", answer: "性别", explain: "奇数是男，偶数是女。" }
],
"mt_g3d_016": [
  { type: "choice", q: "下面哪个可以度量长度？", options: ["线段", "射线", "直线", "都可以"], answer: 0, explain: "线段有端点，可以度量。" },
  { type: "fill", q: "射线有（ ）个端点", answer: "1", explain: "射线有 1 个端点。" }
],
"mt_g3d_017": [
  { type: "choice", q: "比直角小的角叫什么？", options: ["锐角", "直角", "钝角", "平角"], answer: 0, explain: "比直角小的是锐角。" },
  { type: "fill", q: "角的大小与（ ）有关。填张口或边长", answer: "张口", explain: "角的大小与两边张口有关。" }
],
"mt_g3d_018": [
  { type: "fill", q: "把一个整体平均分成 4 份，每份是（ ）", answer: "1/4", explain: "四分之一。" },
  { type: "fill", q: "1/2 表示把一个整体平均分成（ ）份，取其中（ ）份。填两个数字用逗号分隔", answer: "2,1", explain: "二分之一的含义。" }
],
"mt_g3d_019": [
  { type: "choice", q: "2/5 和 4/5 比，哪个大？", options: ["2/5", "4/5", "一样大", "无法比较"], answer: 1, explain: "同分母，分子大的大。" },
  { type: "choice", q: "1/3 和 1/6 比，哪个大？", options: ["1/3", "1/6", "一样大", "无法比较"], answer: 0, explain: "同分子，分母小的大。" }
],
"mt_g3d_020": [
  { type: "fill", q: "1/8 + 2/8 = （ ）", answer: "3/8", explain: "分子相加，分母不变。" },
  { type: "fill", q: "1 - 3/4 = （ ）", answer: "1/4", explain: "1=4/4，4/4-3/4=1/4。" }
],
"mt_g3d_021": [
  { type: "fill", q: "12 名学生中 1/3 是女生，女生有（ ）人", answer: "4", explain: "12÷3=4 人。" },
  { type: "fill", q: "15 个苹果的 1/5 是（ ）个", answer: "3", explain: "15÷5=3 个。" }
],
"mt_g3d_022": [
  { type: "fill", q: "一年有（ ）个大月", answer: "7", explain: "1、3、5、7、8、10、12 月是大月。" },
  { type: "fill", q: "2024 年是（ ）年。填平或闰", answer: "闰", explain: "2024÷4=506，是闰年。" }
],
"mt_g3d_023": [
  { type: "fill", q: "从 3 月 1 日到 4 月 15 日，一共经过（ ）天", answer: "46", explain: "3 月 31 天+4 月 15 天=46 天。" },
  { type: "fill", q: "拳头记忆法中，凸起的地方是大月，有（ ）天", answer: "31", explain: "大月 31 天。" }
],
"mt_g3d_024": [
  { type: "fill", q: "下午 6 时用 24 时计时法是（ ）时", answer: "18", explain: "6+12=18 时。" },
  { type: "fill", q: "晚上 8 时 30 分用 24 时计时法是（ ）时（ ）分。填两个数字用逗号分隔", answer: "20,30", explain: "8+12=20，所以是 20 时 30 分。" }
],
"mt_g3d_025": [
  { type: "fill", q: "0.3 米 = （ ）分米", answer: "3", explain: "0.3 米 = 3 分米。" },
  { type: "fill", q: "1.34 读作（ ）", answer: "一点三四", explain: "小数的读法。" }
],
"mt_g3d_026": [
  { type: "choice", q: "0.4 和 0.6 比，哪个大？", options: ["0.4", "0.6", "一样大", "无法比较"], answer: 1, explain: "0.6>0.4。" },
  { type: "fill", q: "在数轴上，0.5 在 0.3 的（ ）边。填左或右", answer: "右", explain: "0.5>0.3，在右边。" }
],
"mt_g3d_027": [
  { type: "fill", q: "1.5 + 3.8 = （ ）", answer: "5.3", explain: "小数点对齐，1.5+3.8=5.3。" },
  { type: "fill", q: "13.2 - 2.3 = （ ）", answer: "10.9", explain: "小数点对齐，13.2-2.3=10.9。" }
],
"mt_g3d_028": [
  { type: "fill", q: "6 人参加航模比赛，6 人参加机器人比赛，两项都参加 2 人，共有（ ）人获奖", answer: "10", explain: "6+6-2=10 人。" },
  { type: "judge", q: "重叠问题中，总数 = A + B - 重叠部分。", answer: true, explain: "容斥原理。" }
],
// ==================== 四年级上册 ====================
"mt_g4u_001": [
  { type: "fill", q: "一亿里面有多少个千万？", answer: "10", explain: "10 个千万 = 1 亿。" }
],
"mt_g4u_002": [
  { type: "fill", q: "读出这个数：10030400，读作（ ）（例如：一千零三万零四百）", answer: "一千零三万零四百", explain: "按级读：万级一千零三万，个级零四百。" }
],
"mt_g4u_003": [
  { type: "fill", q: "写出：三千零七十万零五百 = （ ）", answer: "30700500", explain: "三千万+七十万+五百 = 30700500。" }
],
"mt_g4u_004": [
  { type: "fill", q: "把 13456789 精确到万位约是（ ）", answer: "13460000", explain: "看千位是 5，向万位进 1，得到 13460000。" }
],
"mt_g4u_005": [
  { type: "choice", q: "下面哪个数是一亿零五十万？", options: ["10050000", "1000500000", "10500000", "100500000"], answer: 3, explain: "一亿零五十万 = 100500000。" }
],
"mt_g4u_006": [
  { type: "judge", q: "每相邻两个计数单位之间的进率都是 10。", answer: true, explain: "这就是十进制计数法。" }
],
"mt_g4u_007": [
  { type: "fill", q: "把 370000 改写成以「万」为单位的数是（ ）万", answer: "37", explain: "去掉 4 个 0，加上万字：37 万。" }
],
"mt_g4u_008": [
  { type: "fill", q: "3.5 平方千米 = （ ）公顷", answer: "350", explain: "1 平方千米 = 100 公顷，3.5 × 100 = 350。" }
],
"mt_g4u_009": [
  { type: "choice", q: "下面哪个图形有两个端点，可以量出长度？", options: ["直线", "射线", "线段", "曲线"], answer: 2, explain: "线段有两个端点，可以度量。" }
],
"mt_g4u_010": [
  { type: "choice", q: "把一个圆平均分成 360 份，每一份所对的角是（ ）", options: ["1°", "10°", "90°", "180°"], answer: 0, explain: "每份所对的角是 1°，这就是角的度量单位。" }
],
"mt_g4u_011": [
  { type: "choice", q: "下面哪个角是钝角？", options: ["45°", "90°", "135°", "180°"], answer: 2, explain: "钝角大于 90° 小于 180°，135° 是钝角。" }
],
"mt_g4u_012": [
  { type: "fill", q: "用一副三角尺可以画出 30°、45°、60°、90°，还可以画出（ ）°（用加法 45°+60° 得到）", answer: "105", explain: "45° + 60° = 105°。" }
],
"mt_g4u_013": [
  { type: "fill", q: "145 × 23 = （ ）", answer: "3335", explain: "145×20=2900，145×3=435，2900+435=3335。" }
],
"mt_g4u_014": [
  { type: "fill", q: "已知 25 × 16 = 400，那么 25 × 32 = （ ）", answer: "800", explain: "一个因数 ×2，积也 ×2，400 × 2 = 800。" }
],
"mt_g4u_015": [
  { type: "fill", q: "一辆汽车速度 75 千米/时，行驶 4 小时，走了（ ）千米", answer: "300", explain: "路程 = 速度 × 时间 = 75 × 4 = 300。" }
],
"mt_g4u_016": [
  { type: "judge", q: "在同一平面内，不相交的两条直线叫平行线。", answer: true, explain: "这是平行线的定义。" }
],
"mt_g4u_017": [
  { type: "choice", q: "过直线外一点，可以画几条这条直线的垂线？", options: ["1 条", "2 条", "无数条", "0 条"], answer: 0, explain: "过直线外一点有且只有一条垂线。" }
],
"mt_g4u_018": [
  { type: "judge", q: "平行四边形的对边平行且相等。", answer: true, explain: "这是平行四边形的特征。" }
],
"mt_g4u_019": [
  { type: "choice", q: "下面哪个图形只有一组对边平行？", options: ["长方形", "正方形", "平行四边形", "梯形"], answer: 3, explain: "梯形只有一组对边平行。" }
],
"mt_g4u_020": [
  { type: "judge", q: "正方形是特殊的长方形。", answer: true, explain: "正方形满足长方形的所有条件。" }
],
"mt_g4u_021": [
  { type: "fill", q: "80 ÷ 20 = （ ）", answer: "4", explain: "8 个十除以 2 个十，等于 4。" }
],
"mt_g4u_022": [
  { type: "fill", q: "84 ÷ 21 = （ ）", answer: "4", explain: "把 21 看作 20 试商，商 4，21×4=84。" }
],
"mt_g4u_023": [
  { type: "fill", q: "612 ÷ 18 = （ ）", answer: "34", explain: "商是两位数：61÷18=3 余 7，72÷18=4，得 34。" }
],
"mt_g4u_024": [
  { type: "fill", q: "已知 54 ÷ 6 = 9，那么 540 ÷ 60 = （ ）", answer: "9", explain: "被除数和除数同时乘 10，商不变。" }
],
"mt_g4u_025": [
  { type: "choice", q: "验算 84 ÷ 21 = 4，应该用什么方法？", options: ["4 + 21", "4 × 21", "21 - 4", "84 × 4"], answer: 1, explain: "商 × 除数 = 被除数，4 × 21 = 84。" }
],
"mt_g4u_026": [
  { type: "choice", q: "下面哪种统计图最适合看出数量的多少？", options: ["条形统计图", "扇形统计图", "折线统计图", "面积图"], answer: 0, explain: "条形统计图一眼就能看出各类数量的多少。" }
],
"mt_g4u_027": [
  { type: "fill", q: "某班今天到校 45 人，请假 5 人，出勤率是（ ）%", answer: "90", explain: "45 ÷ (45+5) = 90%。" }
],
"mt_g4u_028": [
  { type: "fill", q: "烧水 8 分钟，洗壶 1 分钟，接水 1 分钟，找茶叶 1 分钟，洗茶杯 2 分钟，沏茶 1 分钟。最少需要（ ）分钟", answer: "11", explain: "烧水时可以同时做其他事：1+1+8+1=11 分钟。" }
],
"mt_g4u_029": [
  { type: "fill", q: "烙 3 张饼，每次最多 2 张，每面 3 分钟，最少需要（ ）分钟", answer: "9", explain: "3 次，每次 3 分钟，共 9 分钟。" }
],
"mt_g4u_030": [
  { type: "fill", q: "田忌赛马一共有几种出马顺序？", answer: "6", explain: "3 匹马全排列 = 6 种。" }
],
"mt_g4u_031": [
  { type: "fill", q: "1 万张纸叠起来厚 1 米，那 1 亿张纸叠起来厚（ ）米", answer: "10000", explain: "1 亿 = 10000 个万，所以 10000 米。" }
],
"mt_g4u_032": [
  { type: "fill", q: "用计算器计算 38952 × 207 = （ ）", answer: "8063064", explain: "按顺序输入即可得到 8063064。" }
],
"mt_g4u_033": [
  { type: "fill", q: "一本书 8.5 元，买 12 本共花（ ）元", answer: "102", explain: "8.5 × 12 = 102 元。" }
],
"mt_g4u_034": [
  { type: "choice", q: "平行四边形有几条高？", options: ["1 条", "2 条", "4 条", "无数条"], answer: 3, explain: "以任意一条边为底都可以画高，所以有无数条。" }
],
"mt_g4u_035": [
  { type: "fill", q: "数 5080400000000 中，数字 4 在（ ）级。填「个」「万」或「亿」", answer: "万", explain: "4 位于万级，表示 4 个十万。" }
],
"mt_g4u_036": [
  { type: "fill", q: "估算：198 × 31 ≈ （ ）", answer: "6000", explain: "200 × 30 = 6000。" }
],

// ==================== 四年级下册 ====================
"mt_g4d_001": [
  { type: "choice", q: "下面哪个运算与加法互为逆运算？", options: ["乘法", "减法", "除法", "乘方"], answer: 1, explain: "减法是加法的逆运算。" }
],
"mt_g4d_002": [
  { type: "judge", q: "0 可以做除数。", answer: false, explain: "0 不能作除数，因为找不到一个数乘以 0 得到被除数。" }
],
"mt_g4d_003": [
  { type: "fill", q: "36 + 4 × 7 = （ ）", answer: "64", explain: "先算乘法 4×7=28，再算加法 36+28=64。" }
],
"mt_g4d_004": [
  { type: "fill", q: "(7 + 5) × 3 = （ ）", answer: "36", explain: "先算括号 7+5=12，再算 12×3=36。" }
],
"mt_g4d_005": [
  { type: "fill", q: "56 + 37 + 44 = （ ）（用交换律和结合律简算）", answer: "137", explain: "(56+44)+37 = 100+37 = 137。" }
],
"mt_g4d_006": [
  { type: "fill", q: "25 × 88 × 4 = （ ）", answer: "8800", explain: "(25×4)×88 = 100×88 = 8800。" }
],
"mt_g4d_007": [
  { type: "fill", q: "102 × 36 = （ ）", answer: "3672", explain: "(100+2)×36 = 3600 + 72 = 3672。" }
],
"mt_g4d_008": [
  { type: "fill", q: "528 - 93 - 107 = （ ）", answer: "328", explain: "528 - (93+107) = 528 - 200 = 328。" }
],
"mt_g4d_009": [
  { type: "fill", q: "136 × 101 - 136 = （ ）", answer: "13600", explain: "136 × (101-1) = 136 × 100 = 13600。" }
],
"mt_g4d_010": [
  { type: "fill", q: "0.3 表示（ ）分之三", answer: "十", explain: "0.3 = 3/10，表示十分之三。" }
],
"mt_g4d_011": [
  { type: "fill", q: "0.05 的计数单位是（ ）", answer: "0.01", explain: "百分位的计数单位是 0.01。" }
],
"mt_g4d_012": [
  { type: "fill", q: "12.036 读作（ ）（用汉字写，例如：十二点零三六）", answer: "十二点零三六", explain: "整数按整数读，小数点读作点，小数部分逐位读。" }
],
"mt_g4d_013": [
  { type: "fill", q: "化简：0.500 = （ ）", answer: "0.5", explain: "小数末尾的 0 可以去掉。" }
],
"mt_g4d_014": [
  { type: "choice", q: "下面哪个数最大？", options: ["3.24", "3.4", "3.14", "3.09"], answer: 1, explain: "整数部分相同，十分位 4 最大。" }
],
"mt_g4d_015": [
  { type: "fill", q: "0.35 的小数点向右移两位是（ ）", answer: "35", explain: "小数点向右移两位，数扩大 100 倍。" }
],
"mt_g4d_016": [
  { type: "fill", q: "3.05 元 = （ ）角", answer: "30.5", explain: "3.05 元 = 30 角 5 分 = 30.5 角。" }
],
"mt_g4d_017": [
  { type: "fill", q: "把 3.1415 保留两位小数是（ ）", answer: "3.14", explain: "看千分位是 1，舍去，得到 3.14。" }
],
"mt_g4d_018": [
  { type: "choice", q: "从上面看一个正方体，看到的形状是（ ）", options: ["正方形", "长方形", "三角形", "圆"], answer: 0, explain: "从任何方向看正方体都是正方形。" }
],
"mt_g4d_019": [
  { type: "fill", q: "三角形有（ ）条高", answer: "3", explain: "三角形有 3 条高。" }
],
"mt_g4d_020": [
  { type: "judge", q: "用 3cm、5cm、9cm 的小棒可以围成三角形。", answer: false, explain: "3+5=8 < 9，不满足两边之和大于第三边。" }
],
"mt_g4d_021": [
  { type: "choice", q: "三角形两个内角是 90° 和 45°，第三个角是多少度？", options: ["30°", "45°", "60°", "90°"], answer: 1, explain: "180 - 90 - 45 = 45°。" }
],
"mt_g4d_022": [
  { type: "fill", q: "三角形两个角分别是 45° 和 75°，第三个角是（ ）度", answer: "60", explain: "180 - 45 - 75 = 60。" }
],
"mt_g4d_023": [
  { type: "fill", q: "四边形内角和是（ ）度", answer: "360", explain: "四边形可分成两个三角形，2×180=360。" }
],
"mt_g4d_024": [
  { type: "choice", q: "下面哪个图形是轴对称图形？", options: ["平行四边形", "等腰三角形", "普通三角形", "任意四边形"], answer: 1, explain: "等腰三角形沿中线对折能重合。" }
],
"mt_g4d_025": [
  { type: "choice", q: "画轴对称图形的另一半，关键是找（ ）", options: ["对应点", "中点", "任意点", "端点"], answer: 0, explain: "找到对应点，依次连接。" }
],
"mt_g4d_026": [
  { type: "judge", q: "平移后图形的形状和大小都不变。", answer: true, explain: "平移只改变位置，不改变形状和大小。" }
],
"mt_g4d_027": [
  { type: "fill", q: "3.86 + 5.7 = （ ）", answer: "9.56", explain: "小数点对齐相加：3.86 + 5.70 = 9.56。" }
],
"mt_g4d_028": [
  { type: "fill", q: "4.7 + 3.6 + 1.3 + 0.4 = （ ）", answer: "10", explain: "(4.7+1.3)+(3.6+0.4) = 6+4 = 10。" }
],
"mt_g4d_029": [
  { type: "fill", q: "1.25 × 32 = （ ）", answer: "40", explain: "1.25 × 8 × 4 = 10 × 4 = 40。" }
],
"mt_g4d_030": [
  { type: "choice", q: "平均数的意义是什么？", options: ["最大值", "最小值", "代表一组数据的一般水平", "中间的数"], answer: 2, explain: "平均数代表一组数据的集中趋势。" }
],
"mt_g4d_031": [
  { type: "fill", q: "5 次测验成绩分别是 87、93、88、76、91，平均成绩是（ ）分", answer: "87", explain: "(87+93+88+76+91)÷5 = 435÷5 = 87。" }
],
"mt_g4d_032": [
  { type: "choice", q: "复式条形统计图和单式相比，多了什么？", options: ["标题", "图例", "横轴", "纵轴"], answer: 1, explain: "复式条形统计图需要图例区分不同组数据。" }
],
"mt_g4d_033": [
  { type: "fill", q: "鸡兔同笼，共 8 个头，26 只脚，鸡有（ ）只", answer: "3", explain: "假设全是鸡：8×2=16，差 10，每换一只兔多 2 只脚，10÷2=5 只兔，鸡 3 只。" }
],
"mt_g4d_034": [
  { type: "fill", q: "鸡兔同笼，共 35 个头，94 只脚，兔有（ ）只", answer: "12", explain: "假设全是鸡：(94-70)÷2 = 12 只兔。" }
],
"mt_g4d_035": [
  { type: "fill", q: "12.308 中，数字 8 在（ ）位上", answer: "千分", explain: "小数点后第三位是千分位。" }
],
// ==================== 五年级上册 ====================
"mt_g5u_001": [
  { type: "fill", q: "0.8 × 5 = （ ）", answer: "4", explain: "8×5=40，一位小数，得 4。" }
],
"mt_g5u_002": [
  { type: "fill", q: "1.2 × 0.8 = （ ）", answer: "0.96", explain: "12×8=96，两位小数，得 0.96。" }
],
"mt_g5u_003": [
  { type: "fill", q: "4.76 × 2.3 ≈ （ ）（保留两位小数）", answer: "10.95", explain: "4.76×2.3=10.948，保留两位是 10.95。" }
],
"mt_g5u_004": [
  { type: "fill", q: "0.25 × 4.78 × 4 = （ ）", answer: "4.78", explain: "(0.25×4)×4.78 = 1×4.78 = 4.78。" }
],
"mt_g5u_005": [
  { type: "choice", q: "数对 (3, 4) 中，3 表示什么？", options: ["第 3 行", "第 3 列", "第 4 行", "第 4 列"], answer: 1, explain: "数对（列，行），第一个数表示列。" }
],
"mt_g5u_006": [
  { type: "fill", q: "3.68 ÷ 4 = （ ）", answer: "0.92", explain: "商的小数点与被除数对齐，得 0.92。" }
],
"mt_g5u_007": [
  { type: "fill", q: "6.3 ÷ 0.7 = （ ）", answer: "9", explain: "除数和被除数同时×10：63÷7=9。" }
],
"mt_g5u_008": [
  { type: "fill", q: "10 ÷ 3 ≈ （ ）（保留两位小数）", answer: "3.33", explain: "10÷3 = 3.333…，保留两位是 3.33。" }
],
"mt_g5u_009": [
  { type: "fill", q: "1 ÷ 3 的商是循环小数，循环节是（ ）", answer: "3", explain: "1÷3 = 0.333…，循环节是 3。" }
],
"mt_g5u_010": [
  { type: "choice", q: "袋中有 3 个红球、2 个蓝球。摸到红球的可能性是多少？", options: ["2/5", "3/5", "1/2", "1/3"], answer: 1, explain: "3÷(3+2)=3/5。" }
],
"mt_g5u_011": [
  { type: "fill", q: "正方形的边长是 a，周长用字母表示是（ ）", answer: "4a", explain: "正方形周长 = 4×边长 = 4a。" }
],
"mt_g5u_012": [
  { type: "judge", q: "3 + 5 = 8 是方程。", answer: false, explain: "方程必须含有未知数，这里没有。" }
],
"mt_g5u_013": [
  { type: "choice", q: "解方程 2x = 10，依据是（ ）", options: ["等式性质1", "等式性质2", "乘法分配律", "加法交换律"], answer: 1, explain: "两边同时除以 2，用的是等式性质 2。" }
],
"mt_g5u_014": [
  { type: "fill", q: "解方程 3x + 6 = 18，x = （ ）", answer: "4", explain: "3x = 12，x = 4。" }
],
"mt_g5u_015": [
  { type: "fill", q: "妈妈买苹果和梨各 2kg 共花 16.4 元，梨每千克 3.8 元，苹果每千克（ ）元", answer: "4.4", explain: "设苹果每千克 x 元：2(x+3.8)=16.4，x=4.4。" }
],
"mt_g5u_016": [
  { type: "fill", q: "平行四边形底 6cm，高 4cm，面积是（ ）平方厘米", answer: "24", explain: "S = ah = 6×4 = 24。" }
],
"mt_g5u_017": [
  { type: "fill", q: "三角形底 8cm，高 5cm，面积是（ ）平方厘米", answer: "20", explain: "S = ah÷2 = 8×5÷2 = 20。" }
],
"mt_g5u_018": [
  { type: "fill", q: "梯形上底 3cm，下底 5cm，高 4cm，面积是（ ）平方厘米", answer: "16", explain: "S=(3+5)×4÷2=16。" }
],
"mt_g5u_019": [
  { type: "choice", q: "计算组合图形面积，常用的方法有（ ）", options: ["只有分割法", "只有补充法", "分割法和补充法", "都不能用"], answer: 2, explain: "分割法和补充法都可以。" }
],
"mt_g5u_020": [
  { type: "choice", q: "用数方格估算不规则图形面积时，超过半格的算（ ）", options: ["0 格", "半格", "1 格", "2 格"], answer: 2, explain: "超过半格算 1 格，不足半格不计。" }
],
"mt_g5u_021": [
  { type: "fill", q: "100m 的小路每 5m 种一棵树，两端都种，共种（ ）棵", answer: "21", explain: "间隔数 100÷5=20，加 1 得 21 棵。" }
],
"mt_g5u_022": [
  { type: "fill", q: "周长 120m 的圆形水池，每 10m 种一棵树，共种（ ）棵", answer: "12", explain: "封闭环形：棵数 = 间隔数 = 120÷10 = 12。" }
],
"mt_g5u_023": [
  { type: "fill", q: "2.5 × 4 + 6.3 ÷ 0.9 = （ ）", answer: "17", explain: "10 + 7 = 17。" }
],

// ==================== 五年级下册 ====================
"mt_g5d_001": [
  { type: "choice", q: "从上面看一个由 3 个小正方体排成一排组成的图形，看到的是（ ）", options: ["1 个正方形", "3 个正方形排成一排", "L 形", "三角形"], answer: 1, explain: "从上看就是 3 个正方形排成一排。" }
],
"mt_g5d_002": [
  { type: "fill", q: "12 的所有因数是（ ）（用逗号分隔，如 1,2,3）", answer: "1,2,3,4,6,12", explain: "12÷1、12÷2、12÷3、12÷4、12÷6、12÷12 都能整除。" }
],
"mt_g5d_003": [
  { type: "choice", q: "564 是 3 的倍数吗？", options: ["是", "不是", "无法判断", "只有末位是 3 才是"], answer: 0, explain: "5+6+4=15 是 3 的倍数，所以 564 是 3 的倍数。" }
],
"mt_g5d_004": [
  { type: "choice", q: "下面哪个数是质数？", options: ["1", "4", "7", "9"], answer: 2, explain: "7 只有 1 和 7 两个因数，是质数。" }
],
"mt_g5d_005": [
  { type: "fill", q: "长方体有（ ）条棱", answer: "12", explain: "长方体有 12 条棱。" }
],
"mt_g5d_006": [
  { type: "fill", q: "长 5cm、宽 4cm、高 3cm 的长方体，表面积是（ ）平方厘米", answer: "94", explain: "2×(5×4+5×3+4×3) = 2×47 = 94。" }
],
"mt_g5d_007": [
  { type: "fill", q: "1 立方米 = （ ）立方分米", answer: "1000", explain: "相邻体积单位之间进率是 1000。" }
],
"mt_g5d_008": [
  { type: "fill", q: "长 5dm、宽 4dm、高 3dm 的长方体，体积是（ ）立方分米", answer: "60", explain: "5×4×3 = 60。" }
],
"mt_g5d_009": [
  { type: "fill", q: "3/5 的分数单位是（ ）（如 1/5）", answer: "1/5", explain: "分母是 5，分数单位是 1/5。" }
],
"mt_g5d_010": [
  { type: "fill", q: "把 7/4 化成带分数是（ ）（如 1又3/4）", answer: "1又3/4", explain: "7÷4=1余3，写成 1又3/4。" }
],
"mt_g5d_011": [
  { type: "fill", q: "3 ÷ 4 = （ ）（写成分数，如 3/4）", answer: "3/4", explain: "a÷b = a/b。" }
],
"mt_g5d_012": [
  { type: "fill", q: "6/8 化成最简分数是（ ）", answer: "3/4", explain: "分子分母同时除以 2。" }
],
"mt_g5d_013": [
  { type: "fill", q: "12 和 18 的最大公因数是（ ）", answer: "6", explain: "12 和 18 的公因数有 1、2、3、6，最大是 6。" }
],
"mt_g5d_014": [
  { type: "fill", q: "4 和 6 的最小公倍数是（ ）", answer: "12", explain: "4 和 6 的公倍数中最小的一个是 12。" }
],
"mt_g5d_015": [
  { type: "fill", q: "0.36 化成分数是（ ）（写成最简分数，如 9/25）", answer: "9/25", explain: "0.36 = 36/100 = 9/25。" }
],
"mt_g5d_016": [
  { type: "choice", q: "图形旋转的三要素不包括下面哪个？", options: ["旋转中心", "旋转方向", "旋转角度", "图形颜色"], answer: 3, explain: "旋转与图形颜色无关。" }
],
"mt_g5d_017": [
  { type: "judge", q: "旋转后图形的形状和大小都不变。", answer: true, explain: "旋转只改变方向，不改变形状大小。" }
],
"mt_g5d_018": [
  { type: "fill", q: "3/8 + 1/8 = （ ）（写成分数，如 1/2）", answer: "1/2", explain: "3/8+1/8=4/8=1/2。" }
],
"mt_g5d_019": [
  { type: "fill", q: "1/4 + 1/6 = （ ）（写成分数，如 5/12）", answer: "5/12", explain: "通分：3/12+2/12=5/12。" }
],
"mt_g5d_020": [
  { type: "fill", q: "5/6 + 1/12 + 7/12 = （ ）（用简便方法，写成分数或整数）", answer: "2", explain: "1/12+7/12=8/12=2/3，5/6+2/3=5/6+4/6=9/6=1又1/2，或用通分得 2。" }
],
"mt_g5d_021": [
  { type: "fill", q: "第 4 分钟最多通知了多少人？（包括最开始的那个人）", answer: "15", explain: "2⁴-1 = 15 人。" }
],
"mt_g5d_022": [
  { type: "choice", q: "表示数量随时间变化趋势，应选（ ）", options: ["条形统计图", "折线统计图", "扇形统计图", "表格"], answer: 1, explain: "折线统计图最能反映变化趋势。" }
],
"mt_g5d_023": [
  { type: "judge", q: "复式折线统计图能同时比较两组数据的变化趋势。", answer: true, explain: "复式折线可以同时画两条线比较。" }
],
"mt_g5d_024": [
  { type: "fill", q: "9 个零件中有 1 个偏重，用天平至少称（ ）次保证找到", answer: "2", explain: "9 个分 3 组每组 3 个，2 次即可。" }
],
"mt_g5d_025": [
  { type: "fill", q: "8 和 12 的最大公因数 × 最小公倍数 = （ ）", answer: "96", explain: "GCF=4，LCM=24，4×24=96 = 8×12。" }
],
"mt_g5d_026": [
  { type: "fill", q: "3×3×3 的大正方体表面涂色后拆成 27 个小正方体，三面涂色的有（ ）个", answer: "8", explain: "三面涂色的在 8 个顶角上。" }
],
"mt_g5d_027": [
  { type: "judge", q: "先平移后旋转与先旋转后平移结果一定相同。", answer: false, explain: "顺序不同，结果可能不同。" }
],
"mt_g5d_028": [
  { type: "choice", q: "要比较两个班各科平均分高低，最适合用（ ）", options: ["扇形统计图", "复式条形统计图", "单式折线统计图", "表格"], answer: 1, explain: "比较两组同类数据用复式条形统计图。" }
],

// ==================== 六年级上册 ====================
"mt_g6u_001": [
  { type: "judge", q: "2/9 × 3 表示 3 个 2/9 相加。", answer: true, explain: "分数乘整数就是几个相同分数相加。" }
],
"mt_g6u_002": [
  { type: "fill", q: "3/4 × 4 = （ ）（写成整数或分数）", answer: "3", explain: "分子 3×4=12，分母 4，12/4 = 3。" }
],
"mt_g6u_003": [
  { type: "fill", q: "12 的 3/4 是（ ）", answer: "9", explain: "12 × 3/4 = 9。" }
],
"mt_g6u_004": [
  { type: "fill", q: "3/4 × 2/3 = （ ）（写成分数，如 1/2）", answer: "1/2", explain: "3×2 / 4×3 = 6/12 = 1/2。" }
],
"mt_g6u_005": [
  { type: "fill", q: "(1/2 + 1/3) × 6 = （ ）", answer: "5", explain: "1/2×6 + 1/3×6 = 3 + 2 = 5。" }
],
"mt_g6u_006": [
  { type: "fill", q: "一块布料长 5/6 米，剪去了 3/5，还剩（ ）米（写成分数）", answer: "1/3", explain: "5/6 × (1-3/5) = 5/6 × 2/5 = 1/3。" }
],
"mt_g6u_007": [
  { type: "choice", q: "3/4 × 5/6 与 3/4 相比，哪个大？", options: ["乘积大", "3/4 大", "一样大", "无法比较"], answer: 1, explain: "乘小于 1 的数，积小于原数。" }
],
"mt_g6u_008": [
  { type: "choice", q: "北偏东 30° 表示（ ）", options: ["东偏北 30°", "从北向东转 30°", "从东向北转 30°", "北和东之间"], answer: 1, explain: "北偏东 30° 是以北为基准向东转 30°。" }
],
"mt_g6u_009": [
  { type: "judge", q: "只用方向或只用距离就能唯一确定位置。", answer: false, explain: "确定位置需要方向和距离两个要素。" }
],
"mt_g6u_010": [
  { type: "fill", q: "3/4 的倒数是（ ）", answer: "4/3", explain: "分子分母交换位置。" }
],
"mt_g6u_011": [
  { type: "fill", q: "6/7 ÷ 3 = （ ）（写成分数）", answer: "2/7", explain: "6/7 × 1/3 = 6/21 = 2/7。" }
],
"mt_g6u_012": [
  { type: "fill", q: "3/4 ÷ 3/8 = （ ）", answer: "2", explain: "3/4 × 8/3 = 24/12 = 2。" }
],
"mt_g6u_013": [
  { type: "choice", q: "3/4 ÷ 5/6 的商与 3/4 相比（ ）", options: ["商大", "商小", "相等", "无法比较"], answer: 0, explain: "除以小于 1 的数，商大于被除数。" }
],
"mt_g6u_014": [
  { type: "fill", q: "一条绳子的 3/5 是 12 米，这条绳子长（ ）米", answer: "20", explain: "12 ÷ 3/5 = 20 米。" }
],
"mt_g6u_015": [
  { type: "fill", q: "3:4 的比值是（ ）（写成小数或分数）", answer: "0.75", explain: "3÷4 = 0.75。" }
],
"mt_g6u_016": [
  { type: "fill", q: "化简 0.75:1.5 = （ ）（如 1:2）", answer: "1:2", explain: "两边同乘 4：3:6，再化简为 1:2。" }
],
"mt_g6u_017": [
  { type: "fill", q: "按 3:2 把 100 分成两部分，较大的一份是（ ）", answer: "60", explain: "100 ÷ 5 × 3 = 60。" }
],
"mt_g6u_018": [
  { type: "fill", q: "半径 5cm 的圆，直径是（ ）cm", answer: "10", explain: "d = 2r = 10cm。" }
],
"mt_g6u_019": [
  { type: "judge", q: "圆周率 π 是一个无限不循环小数。", answer: true, explain: "π ≈ 3.14159...，是无限不循环小数。" }
],
"mt_g6u_020": [
  { type: "fill", q: "半径 5cm 的圆，周长是（ ）cm（π取3.14）", answer: "31.4", explain: "C = 2πr = 2×3.14×5 = 31.4。" }
],
"mt_g6u_021": [
  { type: "fill", q: "半径 3cm 的圆，面积是（ ）平方厘米（π取3.14）", answer: "28.26", explain: "S = πr² = 3.14×9 = 28.26。" }
],
"mt_g6u_022": [
  { type: "fill", q: "外方内圆，正方形边长 4cm，圆半径 2cm，阴影部分（正方形减圆）面积是（ ）平方厘米（π取3.14）", answer: "3.44", explain: "4²-3.14×2²=16-12.56=3.44。" }
],
"mt_g6u_023": [
  { type: "choice", q: "圆心角是 180° 的扇形是（ ）", options: ["四分之一圆", "半圆", "整圆", "任意扇形"], answer: 1, explain: "180° 圆心角对应半圆。" }
],
"mt_g6u_024": [
  { type: "fill", q: "标准跑道相邻跑道宽 1.25m，起跑线应提前（ ）米（结果保留两位小数，π取3.14）", answer: "7.85", explain: "2π×1.25 ≈ 7.85 米。" }
],
"mt_g6u_025": [
  { type: "judge", q: "65% 和 65/100 意义完全相同。", answer: false, explain: "65% 只表示比率，不带单位；65/100 可以带单位表示具体量。" }
],
"mt_g6u_026": [
  { type: "fill", q: "3/8 化成百分数是（ ）%", answer: "37.5", explain: "3÷8=0.375=37.5%。" }
],
"mt_g6u_027": [
  { type: "fill", q: "750 件商品中合格品 720 件，合格率是（ ）%", answer: "96", explain: "720÷750 = 0.96 = 96%。" }
],
"mt_g6u_028": [
  { type: "judge", q: "一件商品先涨价 20%，再降价 20%，价格和原价相同。", answer: false, explain: "基数不同，最终价格是原价的 0.96 倍。" }
],
"mt_g6u_029": [
  { type: "choice", q: "下面哪个百分数可以超过 100%？", options: ["出勤率", "合格率", "增长率", "发芽率"], answer: 2, explain: "增长率表示增加的部分，可以超过 100%。" }
],
"mt_g6u_030": [
  { type: "choice", q: "扇形统计图整圆代表（ ）", options: ["一部分", "总体", "平均数", "最大值"], answer: 1, explain: "整圆代表总体。" }
],
"mt_g6u_031": [
  { type: "choice", q: "要表示各部分占总体的百分比，应选（ ）", options: ["条形统计图", "折线统计图", "扇形统计图", "表格"], answer: 2, explain: "扇形统计图最能反映占比关系。" }
],
"mt_g6u_032": [
  { type: "fill", q: "1 + 3 + 5 + 7 + 9 = （ ）", answer: "25", explain: "前 5 个连续奇数之和 = 5² = 25。" }
],
"mt_g6u_033": [
  { type: "choice", q: "1/2 + 1/4 + 1/8 + 1/16 + ... 的和趋近于（ ）", options: ["0", "1/2", "1", "2"], answer: 2, explain: "无限递减分数之和趋近于 1。" }
],
"mt_g6u_034": [
  { type: "fill", q: "每天漏水 200 毫升，一年（365 天）共浪费（ ）毫升", answer: "73000", explain: "200 × 365 = 73000 毫升。" }
],
"mt_g6u_035": [
  { type: "choice", q: "刘徽割圆术的核心思想是（ ）", options: ["一次分割", "无限逼近", "直接计算", "估算"], answer: 1, explain: "分割份数越多，越接近圆的真实面积。" }
],
"mt_g6u_036": [
  { type: "fill", q: "1/2 ÷ (1/4 + 1/6) × 2/3 = （ ）（写成分数）", answer: "4/5", explain: "1/4+1/6=5/12，1/2 ÷ 5/12 = 6/5，6/5 × 2/3 = 12/15 = 4/5。" }
],
"mt_g6u_037": [
  { type: "fill", q: "3:4 = 3 ÷ （ ）", answer: "4", explain: "a:b = a÷b。" }
],
"mt_g6u_038": [
  { type: "fill", q: "圆有（ ）条对称轴", answer: "无数", explain: "每条直径都是对称轴，所以有无数条。" }
],

// ==================== 六年级下册 ====================
"mt_g6d_001": [
  { type: "choice", q: "零下 5℃ 用负数表示是（ ）", options: ["+5℃", "-5℃", "0℃", "5℃"], answer: 1, explain: "零下用负数表示：-5℃。" }
],
"mt_g6d_002": [
  { type: "choice", q: "0 是（ ）", options: ["正数", "负数", "既不是正数也不是负数", "既是正数也是负数"], answer: 2, explain: "0 是正负数的分界。" }
],
"mt_g6d_003": [
  { type: "choice", q: "在数轴上，-3 在 0 的（ ）", options: ["右边", "左边", "上面", "下面"], answer: 1, explain: "负数的点都在 0 的左边。" }
],
"mt_g6d_004": [
  { type: "fill", q: "原价 280 元的商品打八五折，折后价是（ ）元", answer: "238", explain: "280 × 0.85 = 238 元。" }
],
"mt_g6d_005": [
  { type: "fill", q: "「三成五」写成百分数是（ ）%", answer: "35", explain: "三成五 = 35%。" }
],
"mt_g6d_006": [
  { type: "fill", q: "某企业销售额 30 万元，增值税税率 3%，应纳税（ ）万元", answer: "0.9", explain: "30 × 3% = 0.9 万元。" }
],
"mt_g6d_007": [
  { type: "fill", q: "存 5000 元，年利率 2.1%，存 2 年，利息是（ ）元", answer: "210", explain: "5000 × 2.1% × 2 = 210 元。" }
],
"mt_g6d_008": [
  { type: "choice", q: "原价 230 元的商品，下面哪种更便宜？", options: ["打九折", "满 100 减 10"], answer: 0, explain: "打九折：230×0.9=207；满减：230-20=210。九折更便宜。" }
],
"mt_g6d_009": [
  { type: "fill", q: "圆柱的侧面展开后是（ ）形（填图形名称）", answer: "长方形", explain: "圆柱侧面展开是长方形。" }
],
"mt_g6d_010": [
  { type: "fill", q: "底面半径 5cm、高 10cm 的圆柱，侧面积是（ ）平方厘米（π取3.14）", answer: "314", explain: "侧面积 = 2πrh = 2×3.14×5×10 = 314。" }
],
"mt_g6d_011": [
  { type: "fill", q: "底面半径 3cm、高 5cm 的圆柱，体积是（ ）立方厘米（π取3.14）", answer: "141.3", explain: "V = πr²h = 3.14×9×5 = 141.3。" }
],
"mt_g6d_012": [
  { type: "fill", q: "圆锥有（ ）个顶点", answer: "1", explain: "圆锥只有 1 个顶点。" }
],
"mt_g6d_013": [
  { type: "fill", q: "底面半径 2m、高 3m 的圆锥，体积是（ ）立方米（π取3.14）", answer: "12.56", explain: "V = 1/3 × 3.14 × 4 × 3 = 12.56。" }
],
"mt_g6d_014": [
  { type: "judge", q: "等底等高的圆柱体积是圆锥体积的 3 倍。", answer: true, explain: "V柱 = 3 × V锥。" }
],
"mt_g6d_015": [
  { type: "judge", q: "3:4 和 6:8 可以组成比例。", answer: true, explain: "3:4 = 6:8 = 0.75，比值相等。" }
],
"mt_g6d_016": [
  { type: "fill", q: "解比例：x:57 = 1:10，x = （ ）", answer: "5.7", explain: "10x = 57，x = 5.7。" }
],
"mt_g6d_017": [
  { type: "judge", q: "速度一定时，路程与时间成正比例。", answer: true, explain: "路程÷时间 = 速度（一定），比值一定。" }
],
"mt_g6d_018": [
  { type: "judge", q: "长方形面积一定时，长与宽成反比例。", answer: true, explain: "长×宽 = 面积（一定），乘积一定。" }
],
"mt_g6d_019": [
  { type: "fill", q: "8 吨水费 40 元，10 吨水费是（ ）元（用正比例）", answer: "50", explain: "40 ÷ 8 × 10 = 50 元。" }
],
"mt_g6d_020": [
  { type: "fill", q: "地图比例尺 1:5000000，图上 3cm 表示实际（ ）km", answer: "150", explain: "3 × 5000000 = 15000000 cm = 150 km。" }
],
"mt_g6d_021": [
  { type: "fill", q: "按 2:1 放大一个正方形，放大后的面积是原来的（ ）倍", answer: "4", explain: "边长变 2 倍，面积变 2² = 4 倍。" }
],
"mt_g6d_022": [
  { type: "fill", q: "前齿轮 48 齿、后齿轮 16 齿，踩一圈后齿轮转（ ）圈", answer: "3", explain: "48 ÷ 16 = 3 圈。" }
],
"mt_g6d_023": [
  { type: "judge", q: "把 4 支铅笔放进 3 个笔筒，一定有一个笔筒至少 2 支。", answer: true, explain: "这是鸽巢原理的基本形式。" }
],
"mt_g6d_024": [
  { type: "fill", q: "11 只鸽子飞进 4 个鸽笼，至少有一个笼子里有（ ）只鸽子", answer: "3", explain: "11 ÷ 4 = 2 余 3，商加 1 得 3。" }
],
"mt_g6d_025": [
  { type: "fill", q: "红蓝黄三色球各 5 个，至少取（ ）个才能保证有 2 个同色", answer: "4", explain: "3 种颜色各取 1 个再取 1 个 = 4 个。" }
],
"mt_g6d_026": [
  { type: "choice", q: "0 属于下面哪一类？", options: ["正数", "负数", "自然数", "分数"], answer: 2, explain: "0 是最小的自然数。" }
],
"mt_g6d_027": [
  { type: "fill", q: "1.25 × 32 × 25 = （ ）", answer: "1000", explain: "1.25×8=10，4×25=100，10×100=1000。" }
],
"mt_g6d_028": [
  { type: "fill", q: "用小棒摆 n 个六边形，共需要（ ）根小棒（用含 n 的式子表示，如 5n+1）", answer: "5n+1", explain: "第一个 6 根，之后每增加一个加 5 根，共 5n+1。" }
],
"mt_g6d_029": [
  { type: "judge", q: "圆的半径和面积成正比例。", answer: false, explain: "S = πr²，面积与半径的平方成正比例，不与半径本身成正比例。" }
],
"mt_g6d_030": [
  { type: "fill", q: "圆的面积公式是（ ）（用 π 和 r 表示，如 πr²）", answer: "πr²", explain: "S = πr²。" }
],
"mt_g6d_031": [
  { type: "fill", q: "等底等高时，圆锥体积是圆柱体积的（ ）（写成分数）", answer: "1/3", explain: "V锥 = 1/3 V柱。" }
],
"mt_g6d_032": [
  { type: "choice", q: "图形经过平移后，下面哪个一定不变？", options: ["位置", "形状和大小", "方向", "坐标"], answer: 1, explain: "平移只改变位置，形状和大小不变。" }
],
"mt_g6d_033": [
  { type: "choice", q: "数对 (3, 4) 和方向距离法相比，共同点是（ ）", options: ["都能确定位置", "都只用 1 个数", "都表示距离", "都表示方向"], answer: 0, explain: "两种方法都能确定平面上一个点的位置。" }
],
"mt_g6d_034": [
  { type: "choice", q: "要表示全班同学各科平均分的高低，最适合用（ ）", options: ["折线统计图", "扇形统计图", "条形统计图", "表格"], answer: 2, explain: "比较各类数量用条形统计图。" }
],
"mt_g6d_035": [
  { type: "judge", q: "存款利息 = 本金 × 利率 × 存期。", answer: true, explain: "这是利息计算公式。" }
],
"mt_g6d_036": [
  { type: "choice", q: "三视图指（ ）", options: ["正视图、侧视图、俯视图", "上视图、下视图、左视图", "前视图、后视图、左视图", "正视图、后视图、右视图"], answer: 0, explain: "三视图 = 正视图 + 侧视图 + 俯视图。" }
],
"mt_g6d_037": [
  { type: "choice", q: "正比例关系的图象是（ ）", options: ["曲线", "过原点的直线", "双曲线", "抛物线"], answer: 1, explain: "正比例图象是过原点的直线。" }
],
}
