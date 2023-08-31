export default defineEventHandler(async event => {
	const config = useRuntimeConfig()
	let messages = []
	const previosMessages = await readBody(event)
	messages = messages.concat(previosMessages)
	let prompt =
		messages.map(message => `${message.role}: ${message.message}`).join("\n") +
		`\nAI:`
	const req = await fetch("https://api.dify.ai/v1/chat-messages", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${config.OPENAI_API_KEY}`,
		},
		body: JSON.stringify({
			inputs: {input: " 你是一名LV 的销售"},
			query: prompt,
			response_mode: "blocking",
			conversation_id: "da329b2b-7dc7-45e0-8c74-28cbb63142de",
			user: "abc-123"
		}),
	})

	const res = await req.json()
	const result = res.choices[0]
	return {
		message: result.text,
	}
})
