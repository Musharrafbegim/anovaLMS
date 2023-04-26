const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://vercel-jiq5vh19i-musharrafbegim.vercel.app"
		: "http://localhost:3000";

export default baseUrl;
