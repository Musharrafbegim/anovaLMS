const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://anova-react.envytheme.com"
		: "http://localhost:3000";

export default baseUrl;
