// ====== 状态 ======
let currentModule = "home";
let currentPet = "";
let selectedPet = "";
let knowledgeFilter = "一年级";       // 当前年级筛选
let knowledgeUnitFilter = "all";   // 当前单元筛选
// ====== AI 配置 ======
const DEEPSEEK_ENDPOINT = "https://api.deepseek.com/chat/completions";
const DEEPSEEK_KEY = "sk-20f6d88958f6468c9fadc058f51e1738";   // ← 换成你自己的

const PET_NAMES = {
  lion: "狮子", cat: "猫咪", dog: "小狗", goat: "山羊",
  cow: "奶牛", fox: "狐狸", rabbit: "兔子", zebra: "斑马"
};

// ====== DOM ======
const petSelectOverlay = document.getElementById("petSelectOverlay");
const petGrid          = document.getElementById("petGrid");
const appEl            = document.getElementById("app");
const contentEl        = document.getElementById("content");
const petFloat         = document.getElementById("petFloat");
const petImage         = document.getElementById("petImage");
const petBubble        = document.getElementById("petBubble");
const userNameEl       = document.getElementById("userName");

// ====== 宠物选择 ======
petGrid.addEventListener("click", (e) => {
  const option = e.target.closest(".pet-option");
  if (!option) return;

  document.querySelectorAll(".pet-option").forEach(el => el.classList.remove("selected"));
  option.classList.add("selected");

  selectedPet = option.dataset.pet;
  document.getElementById("petConfirmBtn").disabled = false;
});

document.getElementById("petConfirmBtn").addEventListener("click", () => {
  if (!selectedPet) return;

  currentPet = selectedPet;
  localStorage.setItem("shuyaya_pet", selectedPet);
  petImage.src = `images/pets/${selectedPet}.png`;
  petImage.onerror = () => { petImage.src = "images/pets/cat.png"; };

  petSelectOverlay.style.display = "none";
  appEl.hidden = false;

  renderModule("home");

  setTimeout(() => {
    showBubble(`我是${PET_NAMES[selectedPet]}，以后我们一起学数学吧！`);
  }, 600);
});

// ====== 模块切换 ======
document.querySelectorAll("[data-module]").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    renderModule(el.dataset.module);
  });
});

function renderModule(module) {
  currentModule = module;

  document.querySelectorAll(".sidebar-link").forEach(el => {
    el.classList.toggle("active", el.dataset.module === module);
  });

  if (module === "home") {
    renderHome();
  } else if (module === "knowledge") {
    renderKnowledge();
  } else if (module === "quiz") {
    quizState = null;
    renderQuiz();
  } else if (module === "ai") {
    renderAI();
  } else if (module === "report") {
    renderReport();
  } else if (module === "profile") {
    renderProfile();
  } else {
    contentEl.innerHTML = `<div class="placeholder">「${moduleName(module)}」模块开发中…</div>`;
  }
}

function moduleName(module) {
  const map = {
    home: "首页", knowledge: "知识点", quiz: "测验",
    ai: "AI答疑", report: "学习报告", profile: "个人中心"
  };
  return map[module] || module;
}

// ====== 右上角头像点击 → 个人中心 ======
document.querySelector(".user-area").addEventListener("click", () => {
  renderModule("profile");
});

// ====== 首页渲染 ======
function renderHome() {
  const hour = new Date().getHours();
  let greet = "你好呀";
  if (hour < 11) greet = "早上好";
  else if (hour < 14) greet = "中午好";
  else if (hour < 18) greet = "下午好";
  else greet = "晚上好";

  const suggestions = generateSuggestions();
  const suggestionsHTML = suggestions.map(s => {
    if (!s.topicId) {
      return `
        <div class="suggestion-card no-action">
          <span class="tag">${s.tag}</span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
      `;
    }
    return `
      <div class="suggestion-card" data-topic-id="${s.topicId}">
        <span class="tag">${s.tag}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="suggestion-actions">
          <button class="suggestion-view-btn" data-topic-id="${s.topicId}">看知识点 →</button>
          <button class="suggestion-ai-btn" data-topic-id="${s.topicId}">让 AI 讲</button>
        </div>
      </div>
    `;
  }).join("");

  contentEl.innerHTML = `
    <div class="welcome-card">
      <h1>${greet}，${userNameEl.textContent}！</h1>
      <p>今天也要加油学数学哦～ 我是你的学习伙伴「数芽芽」，有不懂的地方随时问我。</p>
    </div>

    <h2 class="section-title">📌 今日学习建议</h2>
    <div class="suggestion-grid">${suggestionsHTML}</div>
  `;

  // 点卡片本体 → 跳到知识点页并打开弹窗
  document.querySelectorAll(".suggestion-card[data-topic-id]").forEach(card => {
    card.addEventListener("click", (e) => {
      // 如果点的是按钮，不触发
      if (e.target.closest("button")) return;
      const id = card.dataset.topicId;
      jumpToKnowledge(id);
    });
  });

  // 「看知识点」按钮
  document.querySelectorAll(".suggestion-view-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      jumpToKnowledge(btn.dataset.topicId);
    });
  });

  // 「让 AI 讲」按钮
  document.querySelectorAll(".suggestion-ai-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      jumpToAI(btn.dataset.topicId);
    });
  });
}

// 跳到知识点页并打开弹窗
function jumpToKnowledge(topicId) {
  if (!topicId) return;
  // 先把筛选条件重置到该知识点的年级和单元
  const k = KNOWLEDGE_DATA.find(item => item.id === topicId);
  if (k) {
    knowledgeFilter = k.grade;
    knowledgeUnitFilter = k.unit;
  }
  renderModule("knowledge");
  // 等 DOM 更新后打开弹窗
  setTimeout(() => {
    openKnowledgeModal(topicId);
  }, 200);
}

// 跳到 AI 答疑并让 AI 主动讲解
function jumpToAI(topicId) {
  if (!topicId) return;
  const k = KNOWLEDGE_DATA.find(item => item.id === topicId);
  if (!k) return;
  renderModule("ai");
  setTimeout(() => {
    askAI(`请帮我讲解这个知识点：${k.title}。${k.brief}`);
  }, 100);
}

// ====== 生成智能建议 ======
function generateSuggestions() {
  const userGrade = localStorage.getItem("shuyaya_grade") || "一年级";
  const knowledgeStatus = JSON.parse(localStorage.getItem("shuyaya_knowledge") || "{}");
  const wrongTopics = JSON.parse(localStorage.getItem("shuyaya_wrong_topics") || "{}");
  const quizHistory = JSON.parse(localStorage.getItem("shuyaya_quiz_history") || "[]");

  // 该年级所有知识点
  const gradeTopics = KNOWLEDGE_DATA.filter(k => k.grade === userGrade);

  // 1. 错题优先：在 wrongTopics 里的知识点（按错误次数排序）
  const wrongList = Object.entries(wrongTopics)
    .map(([id, count]) => ({ id, count }))
    .filter(item => {
      const k = KNOWLEDGE_DATA.find(t => t.id === item.id);
      return k && k.grade === userGrade && knowledgeStatus[item.id] !== "mastered";
    })
    .sort((a, b) => b.count - a.count);

  // 2. 未学过的知识点（按难度从低到高）
  const unlearned = gradeTopics
    .filter(k => !knowledgeStatus[k.id] || knowledgeStatus[k.id] === "unlearned")
    .sort((a, b) => (a.difficulty || 1) - (b.difficulty || 1));

  // 3. 学习中的知识点
  const learning = gradeTopics.filter(k => knowledgeStatus[k.id] === "learning");

  // 组装 3 条建议
  const result = [];

  // 优先：错题
  wrongList.slice(0, 2).forEach(item => {
    const k = KNOWLEDGE_DATA.find(t => t.id === item.id);
    if (!k) return;
    result.push({
      tag: "错题复习",
      title: k.title,
      desc: `这道题你答错过 ${item.count} 次，再看看会记得更牢。`,
      topicId: k.id
    });
  });

  // 其次：学习中的
  if (result.length < 3 && learning.length > 0) {
    const k = learning[0];
    result.push({
      tag: "继续学习",
      title: k.title,
      desc: `上次看到一半，今天把它学完吧。`,
      topicId: k.id
    });
  }

  // 最后：未学过的（按难度）
  for (let i = 0; i < unlearned.length && result.length < 3; i++) {
    const k = unlearned[i];
    result.push({
      tag: "新知识点",
      title: k.title,
      desc: k.brief,
      topicId: k.id
    });
  }

  // 兜底：如果年级里知识点太少，随便推荐
  if (result.length === 0) {
    result.push({
      tag: "提示",
      title: "去个人中心设置年级",
      desc: "设置年级后，我会根据你的进度推荐合适的内容。",
      topicId: ""
    });
  }

  return result.slice(0, 3);
}

// ====== 知识点渲染 ======
function renderKnowledge() {
  if (!renderKnowledge._inited) {
    const userGrade = localStorage.getItem("shuyaya_grade");
    if (userGrade) knowledgeFilter = userGrade;
    renderKnowledge._inited = true;
  }

  const byGrade = KNOWLEDGE_DATA.filter(k => {
    if (knowledgeFilter === "all") return true;
    return k.grade === knowledgeFilter;
  });

  const units = [...new Set(byGrade.map(k => k.unit).filter(Boolean))];
  if (knowledgeUnitFilter === "all" || !units.includes(knowledgeUnitFilter)) {
    knowledgeUnitFilter = units[0] || "all";
  }

  const filtered = byGrade.filter(k => {
    if (knowledgeUnitFilter === "all") return true;
    return k.unit === knowledgeUnitFilter;
  });

  // 掌握进度
  const masteredCount = filtered.filter(k => getKnowledgeStatus(k.id) === "mastered").length;
  const totalCount = filtered.length;
  const progressText = `${masteredCount} / ${totalCount}`;

  const cardsHTML = filtered.map(k => {
    const status = getKnowledgeStatus(k.id);
    const statusText = { unlearned: "未学习", learning: "学习中", mastered: "已掌握" }[status];
    const isMastered = status === "mastered";
    const cardClass = `knowledge-card ${isMastered ? "mastered" : "unmastered"}`;
    return `
      <div class="${cardClass}" data-id="${k.id}">
        <div class="card-title">${k.title}</div>
        <div class="card-brief">${k.brief}</div>
        <div class="card-footer">
          <span class="status-badge ${status}">${statusText}</span>
          <button class="card-learn-btn" data-id="${k.id}">去学习 →</button>
        </div>
      </div>
    `;
  }).join("");

const countByGrade = grade => KNOWLEDGE_DATA.filter(k => k.grade === grade).length;
const countByUnit  = unit  => byGrade.filter(k => k.unit === unit).length;

// 默认年级：优先个人中心设置的，其次一年级
if (!["一年级","二年级","三年级","四年级","五年级","六年级"].includes(knowledgeFilter)) {
  const saved = localStorage.getItem("shuyaya_grade");
  knowledgeFilter = saved || "一年级";
}

const gradeButtons = ["一年级","二年级","三年级","四年级","五年级","六年级"].map(g =>
  `<button class="filter-btn ${knowledgeFilter === g ? "active" : ""}" data-filter="${g}">${g}（${countByGrade(g)}）</button>`
).join("");

// 默认单元：第一个
if (!units.includes(knowledgeUnitFilter)) {
  knowledgeUnitFilter = units[0] || "";
}

const unitButtons = units.map(u =>
  `<button class="filter-btn unit-btn ${knowledgeUnitFilter === u ? "active" : ""}" data-unit="${u}">${u}（${countByUnit(u)}）</button>`
).join("");

  contentEl.innerHTML = `
    <div class="knowledge-header">
      <h2 class="section-title">📚 知识点</h2>
      <div class="knowledge-progress">
        <span class="progress-num">${progressText}</span>
        <span class="progress-label">已掌握</span>
      </div>
    </div>

    <div class="filter-group">
      <div class="filter-label">年级</div>
      <div class="knowledge-filter">${gradeButtons}</div>
    </div>

    <div class="filter-group">
      <div class="filter-label">单元</div>
      <div class="knowledge-filter">${unitButtons}</div>
    </div>

    <div class="knowledge-grid">${cardsHTML || '<div class="placeholder">该分类下暂无知识点</div>'}</div>
  `;

  // 年级
  document.querySelectorAll(".knowledge-filter .filter-btn:not(.unit-btn)").forEach(btn => {
    btn.addEventListener("click", () => {
      knowledgeFilter = btn.dataset.filter;
      knowledgeUnitFilter = "all";
      renderKnowledge();
    });
  });

  // 单元
  document.querySelectorAll(".unit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      knowledgeUnitFilter = btn.dataset.unit;
      renderKnowledge();
    });
  });

  // 卡片点击（打开弹窗）
  document.querySelectorAll(".knowledge-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // 如果点的不是「去学习」按钮，才打开弹窗
      if (e.target.closest(".card-learn-btn")) return;
      openKnowledgeModal(card.dataset.id);
    });
  });

  // 「去学习」按钮 → AI 答疑
  document.querySelectorAll(".card-learn-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const k = KNOWLEDGE_DATA.find(item => item.id === id);
      if (!k) return;
      // 切到 AI 答疑，并把知识点作为初始问题
      renderModule("ai");
      setTimeout(() => {
        askAI(`请帮我讲解这个知识点：${k.title}。${k.brief}`);
      }, 100);
    });
  });
}

// 获取知识点状态（从 localStorage 读）
function getKnowledgeStatus(id) {
  const statusMap = JSON.parse(localStorage.getItem("shuyaya_knowledge") || "{}");
  return statusMap[id] || "unlearned";
}

// 设置知识点状态
function setKnowledgeStatus(id, status) {
  const statusMap = JSON.parse(localStorage.getItem("shuyaya_knowledge") || "{}");
  statusMap[id] = status;
  localStorage.setItem("shuyaya_knowledge", JSON.stringify(statusMap));
}

// ====== 知识点弹窗 ======
function openKnowledgeModal(id) {
  const k = KNOWLEDGE_DATA.find(item => item.id === id);
  if (!k) return;

  const status = getKnowledgeStatus(id);
  const isMastered = status === "mastered";

  document.getElementById("modalTitle").textContent = k.title;
// 自动补全「教材依据」（如果 detail 里没有的话）
let detailHTML = k.detail;
if (!detailHTML.includes("教材依据") && k.book) {
  const evidenceHTML = `<h4>教材依据</h4><p>${k.book}${k.unit ? " · " + k.unit : ""}</p>`;
  if (detailHTML.includes("<h4>练习一下</h4>")) {
    detailHTML = detailHTML.replace("<h4>练习一下</h4>", evidenceHTML + "<h4>练习一下</h4>");
  } else {
    detailHTML += evidenceHTML;
  }
}
document.getElementById("modalBody").innerHTML = detailHTML;

  const doneBtn = document.getElementById("modalDone");
  if (isMastered) {
    doneBtn.textContent = "取消掌握";
    doneBtn.classList.add("cancel-master");
  } else {
    doneBtn.textContent = "我学会啦！";
    doneBtn.classList.remove("cancel-master");
  }

  const overlay = document.getElementById("modalOverlay");
  overlay.hidden = false;
  overlay.style.display = "flex";

  if (status === "unlearned") {
    setKnowledgeStatus(id, "learning");
  }

  document.getElementById("modalClose").onclick = closeModal;
  doneBtn.onclick = () => {
    if (isMastered) {
      setKnowledgeStatus(id, "learning");
      showBubble("好的，继续加油！");
    } else {
      setKnowledgeStatus(id, "mastered");
      showBubble("太棒啦！又掌握一个知识点！");
    }
    closeModal();
    renderKnowledge();
  };
}
function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.hidden = true;
  overlay.style.display = "none";
}

document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") closeModal();
});

// ====== 个人中心渲染 ======
function renderProfile() {
  const petName = PET_NAMES[currentPet] || "还没选";
  const savedGrade = localStorage.getItem("shuyaya_grade") || "";
  const savedName = localStorage.getItem("shuyaya_name") || "小朋友";
  const savedAvatar = localStorage.getItem("shuyaya_avatar") || "👤";

  // 可选头像
  const avatarOptions = ["👤", "🐰", "🐱", "🐶", "🦊", "🐻", "🐼", "🦁", "🌟", "🍀"];

  contentEl.innerHTML = `
    <h2 class="section-title">👤 个人中心</h2>

    <div class="profile-card">
          <div class="profile-row avatar-row">
        <span class="profile-label">头像</span>
        <div class="avatar-picker">
          <div class="avatar-current-wrap">
            <span class="avatar-current" id="avatarCurrent">${savedAvatar}</span>
            <span class="avatar-current-label">当前头像</span>
          </div>
          <div class="avatar-options" id="avatarOptions">
            ${avatarOptions.map(a =>
              `<button class="avatar-option ${a === savedAvatar ? "active" : ""}" data-avatar="${a}">${a}</button>`
            ).join("")}
          </div>
        </div>
      </div>
      <div class="profile-row">
        <span class="profile-label">昵称</span>
        <div class="name-edit">
          <input type="text" id="nameInput" value="${savedName}" maxlength="10" placeholder="输入昵称">
          <button id="nameSaveBtn" class="name-save-btn">保存</button>
        </div>
      </div>
      <div class="profile-row">
        <span class="profile-label">我的宠物</span>
        <span class="profile-value">${petName}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">年级</span>
        <select class="grade-select-profile" id="gradeSelectProfile">
          <option value="">未设置</option>
          <option value="一年级">一年级</option>
          <option value="二年级">二年级</option>
          <option value="三年级">三年级</option>
          <option value="四年级">四年级</option>
          <option value="五年级">五年级</option>
          <option value="六年级">六年级</option>
        </select>
      </div>
    </div>

    <button class="change-pet-btn" id="changePetBtn">🔄 更换宠物</button>
  `;

  // 头像切换
  document.querySelectorAll(".avatar-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const a = btn.dataset.avatar;
      localStorage.setItem("shuyaya_avatar", a);
      document.getElementById("avatarCurrent").textContent = a;
      document.querySelectorAll(".avatar-option").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      // 同步顶部头像
      const topAvatar = document.getElementById("userAvatar");
      if (topAvatar) topAvatar.textContent = a;
      showBubble("头像换好啦！");
    });
  });

  // 昵称保存
  const nameInput = document.getElementById("nameInput");
  document.getElementById("nameSaveBtn").addEventListener("click", () => {
    const newName = nameInput.value.trim() || "小朋友";
    localStorage.setItem("shuyaya_name", newName);
    userNameEl.textContent = newName;
    showBubble(`好的，以后就叫你「${newName}」啦！`);
  });
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("nameSaveBtn").click();
  });

  // 年级切换
  const gradeSel = document.getElementById("gradeSelectProfile");
  gradeSel.value = savedGrade;
  gradeSel.addEventListener("change", () => {
    localStorage.setItem("shuyaya_grade", gradeSel.value);
    showBubble(`好的，你现在是${gradeSel.value || "未设置年级"}啦！`);
  });

  // 更换宠物
  document.getElementById("changePetBtn").addEventListener("click", () => {
    document.querySelectorAll(".pet-option").forEach(el => el.classList.remove("selected"));
    document.getElementById("petConfirmBtn").disabled = true;
    selectedPet = "";
    petSelectOverlay.style.display = "flex";
    appEl.hidden = true;
  });
}

// ====== 宠物交互 ======
petFloat.addEventListener("click", () => {
  petImage.classList.remove("jump");
  void petImage.offsetWidth;
  petImage.classList.add("jump");

  const lines = [
    "你今天学得真棒！",
    "有不懂的随时问我哦～",
    "每做对一道题，我就更开心一点！",
    "加油，我们一起把数学学好！",
    "休息一下也可以，别忘了回来哦。",
    "数学不可怕，一点点来就行。"
  ];
  const line = lines[Math.floor(Math.random() * lines.length)];
  showBubble(line);
});

function showBubble(text) {
  petBubble.textContent = text;
  petBubble.classList.add("show");
  clearTimeout(showBubble._timer);
  showBubble._timer = setTimeout(() => {
    petBubble.classList.remove("show");
  }, 4000);
}
// ====== 测验模块 ======
let quizState = null;  // { grade, unit, questions, index, correct, answers }

function renderQuiz() {
  if (!quizState) {
    // 选题界面
    const savedGrade = localStorage.getItem("shuyaya_grade") || "一年级";
    contentEl.innerHTML = `
      <h2 class="section-title">✏️ 小测验</h2>
      <div class="quiz-setup">
        <div class="filter-group">
          <div class="filter-label">选择年级</div>
          <div class="knowledge-filter" id="quizGradeFilter">
            ${["一年级","二年级","三年级","四年级","五年级","六年级"].map(g =>
              `<button class="filter-btn ${g === savedGrade ? "active" : ""}" data-grade="${g}">${g}</button>`
            ).join("")}
          </div>
        </div>
        <div class="filter-group">
          <div class="filter-label">选择题量</div>
          <div class="knowledge-filter" id="quizCountFilter">
            <button class="filter-btn active" data-count="5">5 题</button>
            <button class="filter-btn" data-count="10">10 题</button>
          </div>
        </div>
        <button class="quiz-start-btn" id="quizStartBtn">开始测验</button>
      </div>
    `;

    let selGrade = savedGrade;
    let selCount = 5;

    document.querySelectorAll("#quizGradeFilter .filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#quizGradeFilter .filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selGrade = btn.dataset.grade;
      });
    });
    document.querySelectorAll("#quizCountFilter .filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#quizCountFilter .filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selCount = parseInt(btn.dataset.count);
      });
    });

    document.getElementById("quizStartBtn").addEventListener("click", () => {
      startQuiz(selGrade, selCount);
    });
    return;
  }

  // 答题界面
  renderQuizQuestion();
}

function startQuiz(grade, count) {
  // 从该年级所有知识点中筛出有题目的
  const gradeTopics = KNOWLEDGE_DATA.filter(k => k.grade === grade);
  const pool = [];
  gradeTopics.forEach(k => {
    if (QUIZ_DATA[k.id]) {
      QUIZ_DATA[k.id].forEach(q => {
        pool.push({ ...q, topicId: k.id, topicTitle: k.title });
      });
    }
  });

  if (pool.length === 0) {
    contentEl.innerHTML = `<div class="placeholder">该年级暂时还没有题目，换一个年级试试吧～</div>`;
    return;
  }

  // 随机抽取
  const shuffled = pool.sort(() => Math.random() - 0.5);
  const questions = shuffled.slice(0, Math.min(count, shuffled.length));

  quizState = {
    grade,
    questions,
    index: 0,
    correct: 0,
    answers: []
  };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const s = quizState;
  const q = s.questions[s.index];
  const progress = `${s.index + 1} / ${s.questions.length}`;

  let answerArea = "";
  if (q.type === "choice") {
    answerArea = `
      <div class="quiz-options">
        ${q.options.map((opt, i) =>
          `<button class="quiz-option" data-index="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>`
        ).join("")}
      </div>
    `;
  } else if (q.type === "judge") {
    answerArea = `
      <div class="quiz-options">
        <button class="quiz-option" data-index="1">✓ 正确</button>
        <button class="quiz-option" data-index="0">✗ 错误</button>
      </div>
    `;
  } else if (q.type === "fill") {
    answerArea = `
      <div class="quiz-fill">
        <input type="text" id="quizFillInput" placeholder="在这里输入答案…" autocomplete="off">
        <button class="quiz-submit" id="quizFillSubmit">提交</button>
      </div>
    `;
  }

  contentEl.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress">第 ${progress} 题</div>
      <div class="quiz-score">已答对：${s.correct}</div>
    </div>
    <div class="quiz-card">
      <div class="quiz-topic">${q.topicTitle}</div>
      <div class="quiz-question">${q.q}</div>
      ${answerArea}
    </div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <button class="quiz-next-btn" id="quizNextBtn" hidden>下一题</button>
  `;

  // 绑定答案
  if (q.type === "choice" || q.type === "judge") {
    document.querySelectorAll(".quiz-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.index);
        let isCorrect;
        if (q.type === "choice") {
          isCorrect = idx === q.answer;
        } else {
          isCorrect = (idx === 1) === q.answer;
        }
        // 标记所有按钮
        document.querySelectorAll(".quiz-option").forEach((b, i) => {
          if (q.type === "choice") {
            if (i === q.answer) b.classList.add("correct");
            else if (i === idx && !isCorrect) b.classList.add("wrong");
          } else {
            const isRight = (i === 1) === q.answer;
            if (isRight) b.classList.add("correct");
            else if (i === idx && !isCorrect) b.classList.add("wrong");
          }
          b.disabled = true;
        });
        handleAnswer(isCorrect, q.explain);
      });
    });
  } else if (q.type === "fill") {
    const input = document.getElementById("quizFillInput");
    const submit = document.getElementById("quizFillSubmit");
    const doSubmit = () => {
  const isCorrect = matchAnswer(input.value, q.answer);
  input.disabled = true;
  submit.disabled = true;
  if (isCorrect) input.classList.add("correct");
  else input.classList.add("wrong");
  handleAnswer(isCorrect, q.explain);
};
    submit.addEventListener("click", doSubmit);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") doSubmit();
    });
    input.focus();
  }
}

function handleAnswer(isCorrect, explain) {
  const s = quizState;
  if (isCorrect) s.correct++;
  s.answers.push({ index: s.index, correct: isCorrect });

  const fb = document.getElementById("quizFeedback");
  fb.innerHTML = `
    <div class="feedback-result ${isCorrect ? "right" : "wrong"}">
      ${isCorrect ? "🎉 答对了！" : "😅 答错了"}
    </div>
    <div class="feedback-explain">${explain}</div>
  `;

  const nextBtn = document.getElementById("quizNextBtn");
  nextBtn.hidden = false;
  nextBtn.textContent = s.index + 1 < s.questions.length ? "下一题" : "查看结果";
  nextBtn.onclick = () => {
    s.index++;
    if (s.index < s.questions.length) {
      renderQuizQuestion();
    } else {
      renderQuizResult();
    }
  };
}

function renderQuizResult() {
  const s = quizState;
  const total = s.questions.length;
  const rate = Math.round((s.correct / total) * 100);
  let emoji = "😊";
  let message = "继续加油！";
  if (rate === 100) { emoji = "🏆"; message = "全对！你太厉害了！"; }
  else if (rate >= 80) { emoji = "🌟"; message = "非常棒！"; }
  else if (rate >= 60) { emoji = "👍"; message = "不错，继续努力！"; }

  // 保存测验记录
  const record = {
    date: new Date().toISOString().slice(0, 10),
    grade: s.grade,
    total,
    correct: s.correct,
    rate
  };
  const history = JSON.parse(localStorage.getItem("shuyaya_quiz_history") || "[]");
  history.push(record);
  localStorage.setItem("shuyaya_quiz_history", JSON.stringify(history));
  const wrongIds = s.questions
    .map((q, i) => {
      const answerRecord = s.answers.find(a => a.index === i);
      return (answerRecord && !answerRecord.correct) ? q.topicId : null;
    })
    .filter(Boolean);

  if (wrongIds.length > 0) {
    const wrongMap = JSON.parse(localStorage.getItem("shuyaya_wrong_topics") || "{}");
    wrongIds.forEach(id => {
      wrongMap[id] = (wrongMap[id] || 0) + 1;  // 记录错了几次
    });
    localStorage.setItem("shuyaya_wrong_topics", JSON.stringify(wrongMap));
  }
  // 答题回顾
  const reviewHTML = s.questions.map((q, i) => {
    const answerRecord = s.answers.find(a => a.index === i);
    const isCorrect = answerRecord ? answerRecord.correct : false;
    let questionText = q.q;
    let correctAnswerText = "";
    if (q.type === "choice") {
      correctAnswerText = `${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`;
    } else if (q.type === "judge") {
      correctAnswerText = q.answer ? "✓ 正确" : "✗ 错误";
    } else {
      correctAnswerText = String(q.answer);
    }
    return `
      <div class="review-item ${isCorrect ? "review-right" : "review-wrong"}">
        <div class="review-header">
          <span class="review-num">第 ${i + 1} 题</span>
          <span class="review-status">${isCorrect ? "✓ 答对" : "✗ 答错"}</span>
        </div>
        <div class="review-question">${questionText}</div>
        <div class="review-answer">
          <span class="review-label">正确答案：</span>
          <span class="review-correct">${correctAnswerText}</span>
        </div>
        <div class="review-explain">${q.explain}</div>
      </div>
    `;
  }).join("");

  contentEl.innerHTML = `
    <div class="quiz-result-wrapper">
      <div class="quiz-result-card">
        <div class="result-emoji">${emoji}</div>
        <div class="result-rate">${rate}%</div>
        <div class="result-message">${message}</div>
        <div class="result-detail">共 ${total} 题，答对 ${s.correct} 题，答错 ${total - s.correct} 题</div>
        <div class="result-actions">
          <button class="quiz-again-btn" id="quizAgainBtn">再来一次</button>
          <button class="quiz-back-btn" id="quizBackBtn">返回首页</button>
        </div>
      </div>

      <h3 class="review-title">📋 答题回顾</h3>
      <div class="review-list">${reviewHTML}</div>
    </div>
  `;

  document.getElementById("quizAgainBtn").addEventListener("click", () => {
    quizState = null;
    renderQuiz();
  });
  document.getElementById("quizBackBtn").addEventListener("click", () => {
    quizState = null;
    renderModule("home");
  });

  showBubble(`${emoji} ${message}`);
}
// ====== AI 答疑模块（简版）======
let aiChatHistory = [];

function renderAI() {
  contentEl.innerHTML = `
    <div class="ai-header">
      <h2 class="section-title">AI 答疑</h2>
      <button class="ai-clear-btn" id="aiClearBtn">清空对话</button>
    </div>
    <div class="ai-chat-box" id="aiChatBox">
      ${aiChatHistory.length === 0
        ? `<div class="ai-welcome">你好呀！我是你的数学小助手～ 有什么不会的题，直接问我吧！</div>`
        : aiChatHistory.map(m =>
            `<div class="ai-msg ${m.role}">${escapeHtml(m.content)}</div>`
          ).join("")
      }
    </div>
    <div class="ai-input-bar">
      <input type="text" id="aiInput" placeholder="输入你的问题…" autocomplete="off">
      <button id="aiSendBtn" class="ai-send-btn">发送</button>
    </div>
  `;

  const input = document.getElementById("aiInput");
  document.getElementById("aiSendBtn").addEventListener("click", () => {
    askAI(input.value.trim());
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") askAI(input.value.trim());
  });

  const clearBtn = document.getElementById("aiClearBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (aiChatHistory.length === 0) return;
      if (confirm("确定要清空对话吗？")) {
        aiChatHistory = [];
        renderAI();
      }
    });
  }
}

async function askAI(question) {
  if (!question) return;

  aiChatHistory.push({ role: "user", content: question });
  if (currentModule !== "ai") {
    renderModule("ai");
  } else {
    renderAI();
  }

  // 显示"正在思考"
  const box = document.getElementById("aiChatBox");
  const loadingEl = document.createElement("div");
  loadingEl.className = "ai-msg assistant loading";
  loadingEl.textContent = "让我想一想…";
  box.appendChild(loadingEl);
  box.scrollTop = box.scrollHeight;

  try {
    const reply = await callDeepSeek(question);
    loadingEl.classList.remove("loading");
    loadingEl.textContent = reply;
    aiChatHistory.push({ role: "assistant", content: reply });
    box.scrollTop = box.scrollHeight;
  } catch (err) {
    loadingEl.textContent = "哎呀，我暂时想不出来，再试一次好吗？";
    console.error(err);
  }
}

// ====== 答案宽松匹配 ======
function matchAnswer(userInput, correctAnswer) {
  const norm = (s) => String(s)
    .trim()
    .replace(/\s+/g, "")        // 去掉所有空格
    .replace(/，/g, ",")         // 中文逗号转英文
    .replace(/。/g, ".")         // 中文句号转英文
    .replace(/％/g, "%")         // 中文百分号转英文
    .toLowerCase();              // 转小写

  const u = norm(userInput);
  const c = norm(correctAnswer);

  if (u === c) return true;

  // 数字：5 和 5.0、5.00 都算对
  const numU = parseFloat(u);
  const numC = parseFloat(c);
  if (!isNaN(numU) && !isNaN(numC) && numU === numC) return true;

  // 答案里用 | 分隔多个可接受答案，例如 "5|五|5个"
  if (c.includes("|")) {
    return c.split("|").some(alt => norm(alt) === u);
  }
  return false;
}
// ====== 学习报告模块 ======
function renderReport() {
  // 读取数据
  const quizHistory = JSON.parse(localStorage.getItem("shuyaya_quiz_history") || "[]");
  const knowledgeStatus = JSON.parse(localStorage.getItem("shuyaya_knowledge") || "{}");

  // 统计已掌握知识点
  const masteredCount = Object.values(knowledgeStatus).filter(s => s === "mastered").length;

  // 统计连续学习天数（从 quizHistory 里取日期）
  const dates = [...new Set(quizHistory.map(r => r.date))].sort().reverse();
  let streak = 0;
  if (dates.length > 0) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let checkDate = new Date(today);
    for (let i = 0; i < 365; i++) {
      const dateStr = checkDate.toISOString().slice(0, 10);
      if (dates.includes(dateStr)) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (i === 0) {
        // 今天没学，从昨天开始查
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
  }

  // 平均正确率
  const avgRate = quizHistory.length > 0
    ? Math.round(quizHistory.reduce((sum, r) => sum + r.rate, 0) / quizHistory.length)
    : 0;

  // 测验次数
  const quizCount = quizHistory.length;

  // 最近 7 天答题量
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const dayRecords = quizHistory.filter(r => r.date === dateStr);
    const totalQ = dayRecords.reduce((sum, r) => sum + r.total, 0);
    last7Days.push({ date: dateStr, label: `${d.getMonth() + 1}/${d.getDate()}`, count: totalQ });
  }
  const maxCount = Math.max(...last7Days.map(d => d.count), 1);

  // 日历（当前月）
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startWeekday = firstDay.getDay();  // 0=周日

  // 学习过的日期集合
  const studiedDates = new Set(quizHistory.map(r => r.date));

  // 生成日历格子
  let calendarHTML = "";
  // 空白（1号之前的空位）
  for (let i = 0; i < startWeekday; i++) {
    calendarHTML += `<div class="calendar-day empty"></div>`;
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const isToday = d === now.getDate();
    const studied = studiedDates.has(dateStr);
    let cls = "calendar-day";
    if (isToday) cls += " today";
    if (studied) cls += " studied";
    calendarHTML += `<div class="${cls}">${d}</div>`;
  }

  contentEl.innerHTML = `
    <h2 class="section-title">📊 学习报告</h2>

    <div class="report-stats">
      <div class="stat-card">
        <div class="stat-num">${masteredCount}</div>
        <div class="stat-label">已掌握知识点</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${streak}</div>
        <div class="stat-label">连续学习天数</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${avgRate}%</div>
        <div class="stat-label">测验平均正确率</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${quizCount}</div>
        <div class="stat-label">完成测验次数</div>
      </div>
    </div>

    <div class="report-main">
      <div class="report-calendar">
        <h3 class="report-subtitle">📅 ${year} 年 ${month + 1} 月</h3>
        <div class="calendar-grid">
          <div class="calendar-header">日</div>
          <div class="calendar-header">一</div>
          <div class="calendar-header">二</div>
          <div class="calendar-header">三</div>
          <div class="calendar-header">四</div>
          <div class="calendar-header">五</div>
          <div class="calendar-header">六</div>
          ${calendarHTML}
        </div>
        <div class="calendar-legend">
          <span class="legend-item"><span class="legend-dot studied"></span>学习过</span>
          <span class="legend-item"><span class="legend-dot today"></span>今天</span>
        </div>
      </div>

      <div class="report-chart">
        <h3 class="report-subtitle">📈 最近 7 天答题量</h3>
        <div class="bar-chart">
          ${last7Days.map(d => `
            <div class="bar-item">
              <div class="bar-value">${d.count || ""}</div>
              <div class="bar" style="height: ${d.count / maxCount * 140}px"></div>
              <div class="bar-label">${d.label}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

// 简单的 HTML 转义，防止 XSS
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}


// 调用 DeepSeek API
const AI_SYSTEM_PROMPT = `你是「数芽芽」，一位耐心的小学数学老师。
用简短、易懂的语言讲解数学知识，多用例子。
一次讲一个知识点，讲完问一句"听懂了吗？"。
遇到不懂的问题，用提问引导孩子思考，不要直接给答案。
回答控制在 5-8 句话以内，尽量用小学生能理解的语言。`;

async function callDeepSeek(question) {
  const key = DEEPSEEK_KEY;
  if (!key) {
    throw new Error("AI 未配置 Key");
  }

  const messages = [
    { role: "system", content: AI_SYSTEM_PROMPT },
    ...aiChatHistory.slice(-6).filter(m => m.content !== question || m.role !== "user")
  ];
  if (messages[messages.length - 1].content !== question) {
    messages.push({ role: "user", content: question });
  }

  const res = await fetch(DEEPSEEK_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${key}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: messages,
      temperature: 0.7
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error("API 请求失败：" + errText);
  }

  const data = await res.json();
  return data.choices[0].message.content;
}
// ====== 启动 ======
function init() {
  const savedPet = localStorage.getItem("shuyaya_pet");
  const savedName = localStorage.getItem("shuyaya_name");
  const savedAvatar = localStorage.getItem("shuyaya_avatar");

  if (savedName) userNameEl.textContent = savedName;
  const topAvatar = document.getElementById("userAvatar");
  if (topAvatar && savedAvatar) topAvatar.textContent = savedAvatar;

  if (savedPet) {
    currentPet = savedPet;
    petImage.src = `images/pets/${savedPet}.png`;
    petSelectOverlay.style.display = "none";
    appEl.hidden = false;
    renderModule("home");
  } else {
    petSelectOverlay.style.display = "flex";
    appEl.hidden = true;
  }
}
init();