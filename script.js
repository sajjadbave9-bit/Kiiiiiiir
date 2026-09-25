const API_KEY = "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";

async function generateCode() {
    const prompt = document.getElementById("prompt").value;
    const codeType = document.getElementById("codeType").value;
    const result = document.getElementById("codeResult");
    const preview = document.getElementById("preview");

    if (!prompt.trim()) {
        result.textContent = "اول توضیحت رو بنویس!";
        return;
    }

    result.textContent = "در حال ساخت...";

    try {
        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "openrouter/free",
                    messages: [
                        {
                            role: "system",
                            content: `You are an expert programmer. Generate only valid ${codeType} code. Do not explain the code.`
                        },
                        {
                            role: "user",
                            content: prompt
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "API Error");
        }

        const code = data.choices[0].message.content
            .replace(/^```[a-zA-Z]*\n?/, "")
            .replace(/\n?```$/, "");

        result.textContent = code;

        if (codeType === "html") {
            preview.srcdoc = code;
        }

    } catch (error) {
        result.textContent = "خطا: " + error.message;
    }
}

function copyCode() {
    const code = document.getElementById("codeResult").textContent;

    navigator.clipboard.writeText(code).then(() => {
        alert("کد کپی شد ✅");
    });
}
