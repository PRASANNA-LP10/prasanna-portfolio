import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const SYSTEM_PROMPT = `You are an AI hiring assistant on Prasanna Lakshmanan's personal portfolio website...`;

    const messagesEl = document.getElementById('chatMessages');
    const sendBtn = document.getElementById('sendBtn');
    let isLoading = false;
    let chatHistory = [];

    function addMsg(role, text){
      const div = document.createElement('div');
      div.className = 'msg ' + role;
      const avatar = document.createElement('div');
      avatar.className = 'msg-avatar';
      avatar.textContent = role === 'bot' ? '🤖' : '👤';
      const bubble = document.createElement('div');
      bubble.className = 'msg-bubble';
      bubble.textContent = text;
      div.appendChild(avatar);
      div.appendChild(bubble);
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function showTyping(){
      const div = document.createElement('div');
      div.className = 'msg bot'; div.id = 'typing';
      const av = document.createElement('div');
      av.className = 'msg-avatar'; av.textContent = '🤖';
      const bub = document.createElement('div');
      bub.className = 'msg-bubble';
      bub.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
      div.appendChild(av); div.appendChild(bub);
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function hideTyping(){ document.getElementById('typing')?.remove(); }

    async function sendMessage(userText){
      if(isLoading || !userText.trim()) return;
      isLoading = true; sendBtn.disabled = true;
      addMsg('user', userText);
      chatHistory.push({role:'user', content: userText});
      showTyping();
      try{
        const res = await fetch('https://api.anthropic.com/v1/messages',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            model:'claude-sonnet-4-20250514',
            max_tokens:1000,
            system: SYSTEM_PROMPT,
            messages: chatHistory
          })
        });
        const data = await res.json();
        hideTyping();
        const reply = data.content?.[0]?.text || "I'm having trouble connecting right now.";
        chatHistory.push({role:'assistant', content: reply});
        addMsg('bot', reply);
      } catch(e){
        hideTyping();
        const fallback = "Connection issue!";
        chatHistory.push({role:'assistant', content: fallback});
        addMsg('bot', fallback);
      }
      isLoading = false; sendBtn.disabled = false;
    }

    window.sendChat = function(){
      const input = document.getElementById('chatInput');
      const val = input.value.trim();
      if(!val) return;
      input.value = '';
      sendMessage(val);
    }

    window.askQuick = function(q){ sendMessage(q); }

  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">PL</div>
        <div className="nav-links">
          <button className="nav-link" onClick={() => document.getElementById('skills').scrollIntoView({behavior:'smooth'})}>Skills</button>
          <button className="nav-link" onClick={() => document.getElementById('experience').scrollIntoView({behavior:'smooth'})}>Experience</button>
          <button className="nav-link" onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}>Projects</button>
          <button className="nav-link" onClick={() => document.getElementById('certs').scrollIntoView({behavior:'smooth'})}>Certs</button>
          <button className="nav-link" onClick={() => document.getElementById('chat').scrollIntoView({behavior:'smooth'})}>AI Chat</button>
        </div>
      </nav>

      
        <div class="portfolio">

  <div class="hero fade d1">
    <div class="hero-badge"><span class="dot"></span> Open to internships &amp; opportunities · 2026</div>
    <h1 class="hero-name">Prasanna  Lakshmanan</h1>
    <p class="hero-sub">Pre-final year CSE student · Developer &amp; Data Analytics enthusiast · Multi-cloud certified (AWS · Azure · Oracle)</p>
    <div class="hero-chips">
      <a class="chip" href="mailto:prasanna.l1010@gmail.com">📧 prasanna.l1010@gmail.com</a>
      <div class="chip">📱 9080362254</div>
      <div class="chip">📍 Chennai, Tamil Nadu</div>
      <a class="chip" href="https://github.com/PRASANNA-LP10" target="_blank" rel="noopener">⌥ github.com/PRASANNA-LP10</a>
      <a class="chip" href="https://www.linkedin.com/in/prasannal10" target="_blank" rel="noopener">in linkedin.com/in/prasannal10</a>
    </div>
  </div>

  <div class="section fade d2" id="skills">
    <div class="section-label">Technical Skills</div>
    <div class="skills-wrap">
      <div class="skill-box"><div class="skill-cat">Languages</div><div class="skill-list">Java · Python</div></div>
      <div class="skill-box"><div class="skill-cat">Frontend</div><div class="skill-list">React · HTML · CSS · JavaScript · Tailwind CSS</div></div>
      <div class="skill-box"><div class="skill-cat">Backend</div><div class="skill-list">Flask <span class="skill-new">new</span> · REST APIs · Node.js basics</div></div>
      <div class="skill-box"><div class="skill-cat">Database</div><div class="skill-list">MySQL · PostgreSQL <span class="skill-new">new</span> · SQL</div></div>
      <div class="skill-box"><div class="skill-cat">Data Analytics</div><div class="skill-list">Power BI · KPIs · HR Analytics · Data Visualization</div></div>
      <div class="skill-box"><div class="skill-cat">Tools &amp; Version Control</div><div class="skill-list">Git · GitHub · VS Code</div></div>
      <div class="skill-box"><div class="skill-cat">OS &amp; Concepts</div><div class="skill-list">Windows · Linux · OOP · DSA basics</div></div>
      <div class="skill-box"><div class="skill-cat">Cloud &amp; AI (Certified)</div><div class="skill-list">AWS <span class="skill-new">cert</span> · Azure <span class="skill-new">cert</span> · Oracle AI <span class="skill-new">cert</span></div></div>
    </div>
  </div>

  <div class="section fade d2" id="experience">
    <div class="section-label">Internship Experience</div>
    <div class="exp-list">
      <div class="exp-card">
        <div class="exp-top">
          <div><div class="exp-role">Web Development Intern</div><div class="exp-company">TekPyramid</div> </div>
          <div class="exp-badge">Certified</div>
        </div>
        <div class="exp-desc">Built a real-time music application using React and Tailwind CSS. Implemented user authorization and session-based security for protected routes. Received a Web Development Internship certificate.</div>
      </div>
  </div>

      <div class="exp-card">
        <div class="exp-top">
          <div><div class="exp-role">Data Analytics Intern</div><div class="exp-company">Izeon Pvt Ltd</div></div>
          <div class="exp-badge">Certified</div>
        </div>
        <div class="exp-desc">Developed a comprehensive HR analytics dashboard. Designed KPIs and interactive data visualizations to surface actionable business insights for data-driven decision-making. Received a Data Analytics certificate.</div>
      </div>
    </div>
 

  <div class="section fade d3" id="projects">
    <div class="section-label">Projects</div>
    <div class="projects-grid">
      <div class="project-card">
        <div class="proj-icon">🎵</div>
        <div class="proj-name">Innovators HUB Music App</div>
        <div class="proj-desc">Modern music streaming web app with responsive UI, interactive music controls, and playlist management built with React and Tailwind CSS.</div>
        <div class="proj-footer">
          <div class="proj-tags"><span class="tag">React</span><span class="tag">Tailwind</span><span class="tag">JS</span></div>
          <a class="proj-link" href="https://github.com/PRASANNA-LP10" target="_blank" rel="noopener">GitHub →</a>
        </div>
      </div>
      <div class="project-card">
        <div class="proj-icon">🎧</div>
        <div class="proj-name">JioSaavn Clone</div>
        <div class="proj-desc">Functional clone of JioSaavn with playlist interface, dynamic music player UI, and seamless navigation using React component architecture.</div>
        <div class="proj-footer">
          <div class="proj-tags"><span class="tag">React</span><span class="tag">Tailwind</span></div>
          <a class="proj-link" href="https://github.com/PRASANNA-LP10" target="_blank" rel="noopener">GitHub →</a>
        </div>
      </div>
      <div class="project-card">
        <div class="proj-icon">🍽️</div>
        <div class="proj-name">Recipe Web Application</div>
        <div class="proj-desc">Full-stack recipe management system. Flask + PostgreSQL backend with a React frontend — users can browse, add, and manage recipes dynamically.</div>
        <div class="proj-footer">
          <div class="proj-tags"><span class="tag">React</span><span class="tag">Flask</span><span class="tag">PostgreSQL</span><span class="tag">Python</span></div>
          <a class="proj-link" href="https://github.com/PRASANNA-LP10/recipe-app" target="_blank" rel="noopener">GitHub →</a>
        </div>
      </div>
      <div class="project-card">
        <div class="proj-icon">♻️</div>
        <div class="proj-name">EcoBin – IoT Smart Waste System</div>
        <div class="proj-desc">IoT-based waste segregation project that automatically separates biodegradable and non-biodegradable waste, converting biodegradable waste into biogas.</div>
        <div class="proj-footer">
          <div class="proj-tags"><span class="tag">IoT</span><span class="tag">Python</span><span class="tag">Hardware</span></div>
          <a class="proj-link" href="https://github.com/PRASANNA-LP10" target="_blank" rel="noopener">GitHub →</a>
        </div>
      </div>
      <div class="project-card">
        <div class="proj-icon">🧮</div>
        <div class="proj-name">Scientific Calculator</div>
        <div class="proj-desc">Web-based calculator with a clean UI supporting both basic arithmetic and advanced mathematical operations, built with vanilla HTML, CSS, and JavaScript.</div>
        <div class="proj-footer">
          <div class="proj-tags"><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span></div>
          <a class="proj-link" href="https://github.com/PRASANNA-LP10" target="_blank" rel="noopener">GitHub →</a>
        </div>
      </div>
    </div>
  </div>

  <div class="section fade d4">
    <div class="section-label">Education</div>
    <div class="edu-list">
      <div class="edu-row">
        <div><div class="edu-deg">B.E. / B.Tech — Computer Science Engineering</div><div class="edu-school">Panimalar Engineering College · 2023–2027</div></div>
        <div class="edu-score">CGPA 8.4 / 10</div>
      </div>
      <div class="edu-row">
        <div><div class="edu-deg">Class XII — Matric</div><div class="edu-school">Daniel Thomas Mat Hr Sec School · 2023</div></div>
        <div class="edu-score">84%</div>
      </div>
      <div class="edu-row">
        <div><div class="edu-deg">Class X — Matric</div><div class="edu-school">Daniel Thomas Mat Hr Sec School · 2021</div></div>
        <div class="edu-score">Passed</div>
      </div>
    </div>
  </div>

  <div class="section fade d4" id="certs">
    <div class="section-label">Certifications</div>
    <div class="certs-grid">
      <div class="cert-card"><div class="cert-icon ci-aws">🟠</div><div><div class="cert-name">AWS Cloud Practitioner Essentials</div><div class="cert-meta">Amazon Web Services · July 17, 2025</div></div></div>
      <div class="cert-card"><div class="cert-icon ci-oracle">🔴</div><div><div class="cert-name">Oracle Cloud Infrastructure 2025 AI Foundations Associate</div><div class="cert-meta">Oracle University · July 15, 2025 · ID: 100731387OCI25AICFA</div></div></div>
      <div class="cert-card"><div class="cert-icon ci-oracle">☁️</div><div><div class="cert-name">Oracle Cloud e-Certificate</div><div class="cert-meta">Oracle</div></div></div>
      <div class="cert-card"><div class="cert-icon ci-ms">🔷</div><div><div class="cert-name">Microsoft Azure Fundamentals</div><div class="cert-meta">Microsoft</div></div></div>
      <div class="cert-card"><div class="cert-icon ci-nasscom">🏛️</div><div><div class="cert-name">NASSCOM Certification</div><div class="cert-meta">NASSCOM</div></div></div>
      <div class="cert-card"><div class="cert-icon ci-coursera">📚</div><div><div class="cert-name">Coursera Certificate</div><div class="cert-meta">Coursera · ID: 8QRXPFN0TLS5</div></div></div>
      <div class="cert-card"><div class="cert-icon ci-nptel">🎓</div><div><div class="cert-name">Database Management System</div><div class="cert-meta">NPTEL · 2026</div></div></div>
      <div class="cert-card"><div class="cert-icon ci-izeon">📊</div><div><div class="cert-name">Data Analytics Internship</div><div class="cert-meta">Izeon Pvt Ltd</div></div></div>
      <div class="cert-card"><div class="cert-icon ci-tek">💻</div><div><div class="cert-name">Web Development Internship</div><div class="cert-meta">TekPyramid</div></div></div>
    </div>
  </div>

  <div class="section fade d5">
    <div class="section-label">Soft Skills</div>
    <div class="soft-wrap">
      <div class="soft-pill">Communication</div>
      <div class="soft-pill">Teamwork</div>
      <div class="soft-pill">Problem Solving</div>
      <div class="soft-pill">Time Management</div>
      <div class="soft-pill">Adaptability</div>
      <div class="soft-pill">Critical Thinking</div>
    </div>
  </div>

 

  <div class="footer fade d6">
    <div class="footer-big">Let's build something great 🚀</div>
    <div class="footer-sub">Pre-final year CSE student · Chennai, India · Actively seeking internships · 2026</div>
    <div class="footer-btns">
      <a class="footer-btn primary" href="mailto:prasanna.l1010@gmail.com">📧 Email Me</a>
      <a class="footer-btn secondary" href="https://github.com/PRASANNA-LP10" target="_blank" rel="noopener">⌥ GitHub</a>
      <a class="footer-btn secondary" href="https://www.linkedin.com/in/prasannal10" target="_blank" rel="noopener">in LinkedIn</a>
    </div>
  </div>

</div>

        {/* CHAT SECTION (important part kept exactly) */}
        <div className="section fade d6" id="chat">
          <div className="section-label">AI Hiring Assistant</div>

          <div className="chatbot-wrap">
            <div className="chat-messages" id="chatMessages">
              <div className="msg bot">
                <div className="msg-avatar">🤖</div>
                <div className="msg-bubble">Hey there! 👋 Ask me anything.</div>
              </div>
            </div>

            <div className="chat-input-area">
              <div className="quick-btns">
                <button className="quick-btn" onClick={() => window.askQuick('Why should we hire Prasanna?')}>Why hire?</button>
              </div>

              <div className="chat-row">
                <input
                  className="chat-input"
                  id="chatInput"
                  type="text"
                  placeholder="Ask..."
                  onKeyDown={(e) => e.key === 'Enter' && window.sendChat()}
                />
                <button className="chat-send" id="sendBtn" onClick={() => window.sendChat()}>
                  Send →
                </button>
              </div>
            </div>
          </div>
        </div>
        

     
    </>
  );
}

export default App;