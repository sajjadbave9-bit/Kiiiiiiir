const API_KEY = "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";

async function askAI(prompt) {
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
                        role: "user",
                        content: prompt
                    }
                ]
            })
        }
    );

    const data = await response.json();
    return data.choices[0].message.content;
}
