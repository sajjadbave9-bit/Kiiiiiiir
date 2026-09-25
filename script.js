* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #070712;
    color: white;
    min-height: 100vh;
    overflow-x: hidden;
}

/* Navbar */

.navbar {
    width: 100%;
    padding: 18px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(7, 7, 18, 0.85);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
}

.logo {
    font-size: 22px;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-links a {
    color: #ddd;
    text-decoration: none;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #7c5cff;
}

/* Hero */

.hero {
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px 20px;
    background:
        radial-gradient(circle at 50% 20%, rgba(124,92,255,0.25), transparent 40%),
        #070712;
}

.hero-content {
    max-width: 850px;
}

.badge {
    display: inline-block;
    padding: 10px 18px;
    border: 1px solid rgba(124,92,255,0.5);
    border-radius: 30px;
    background: rgba(124,92,255,0.1);
    margin-bottom: 25px;
}

.hero h1 {
    font-size: clamp(40px, 8vw, 80px);
    line-height: 1.15;
    margin-bottom: 25px;
}

.hero h1 span {
    display: block;
    background: linear-gradient(90deg, #7c5cff, #00e5ff);
    -webkit-background-clip: text;
    color: transparent;
}

.hero p {
    color: #aaa;
    font-size: 18px;
    line-height: 1.9;
    margin-bottom: 35px;
}

.main-button,
.generate-button {
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    padding: 16px 28px;
    background: linear-gradient(135deg, #7c5cff, #00bcd4);
    box-shadow: 0 10px 35px rgba(124,92,255,0.25);
    transition: 0.3s;
}

.main-button {
    display: inline-block;
    text-decoration: none;
}

.main-button:hover,
.generate-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(124,92,255,0.4);
}

/* Generator */

.generator-section {
    max-width: 1000px;
    margin: auto;
    padding: 100px 20px;
}

.section-title {
    text-align: center;
    margin-bottom: 40px;
}

.section-title span {
    color: #00e5ff;
    font-size: 13px;
    letter-spacing: 2px;
}

.section-title h2 {
    font-size: 40px;
    margin: 15px 0;
}

.section-title p {
    color: #999;
}

/* Generator Box */

.generator-box,
.result-box,
.preview-box {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 22px;
    padding: 25px;
    margin-bottom: 25px;
    backdrop-filter: blur(15px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}

.generator-box label {
    display: block;
    margin: 18px 0 10px;
    font-weight: bold;
}

textarea,
select {
    width: 100%;
    border: 1px solid rgba(255,255,255,0.1);
    outline: none;
    border-radius: 15px;
    background: #10101d;
    color: white;
    padding: 16px;
    font-size: 15px;
}

textarea {
    min-height: 150px;
    resize: vertical;
    line-height: 1.7;
}

textarea:focus,
select:focus {
    border-color: #7c5cff;
    box-shadow: 0 0 20px rgba(124,92,255,0.15);
}

select {
    cursor: pointer;
}

.generate-button {
    width: 100%;
    margin-top: 25px;
}

/* Result */

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-weight: bold;
}

.result-header button {
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.07);
    color: white;
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
}

pre {
    background: #050509;
    border-radius: 15px;
    padding: 20px;
    min-height: 180px;
    overflow: auto;
    direction: ltr;
    text-align: left;
    color: #b9f6ff;
    line-height: 1.7;
}

/* Preview */

.preview-box iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 15px;
    background: white;
}

/* About */

.about {
    text-align: center;
    padding: 90px 20px;
    background: rgba(255,255,255,0.02);
}

.about h2 {
    font-size: 35px;
    margin-bottom: 20px;
}

.about p {
    color: #999;
    line-height: 2;
}

/* Footer */

footer {
    text-align: center;
    padding: 30px;
    color: #777;
    border-top: 1px solid rgba(255,255,255,0.08);
}

/* Mobile */

@media (max-width: 700px) {

    .navbar {
        padding: 16px 20px;
    }

    .nav-links {
        gap: 12px;
    }

    .nav-links a {
        font-size: 13px;
    }

    .hero {
        min-height: 75vh;
    }

    .hero h1 {
        font-size: 42px;
    }

    .hero p {
        font-size: 15px;
    }

    .generator-section {
        padding: 70px 15px;
    }

    .section-title h2 {
        font-size: 30px;
    }

    .generator-box,
    .result-box,
    .preview-box {
        padding: 17px;
        border-radius: 17px;
    }

    .preview-box iframe {
        height: 300px;
    }
}