import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";

const Giscus = () => {
	const { theme } = useTheme();
	const COMMENTS_ID = "comments-container";
	const LoadComments = useCallback(() => {
		const comments = document.getElementById(COMMENTS_ID);
		const script = document.createElement("script");
		script.src = "https://giscus.app/client.js";
		script.setAttribute("data-repo", "geonya/blog-comments");
		script.setAttribute("data-repo-id", "R_kgDOHOSC1w");
		script.setAttribute("data-category", "comments");
		script.setAttribute("data-category-id", "DIC_kwDOHOSC184COvTx");
		script.setAttribute("data-mapping", "pathname");
		script.setAttribute("data-reactions-enabled", "1");
		script.setAttribute("data-emit-metadata", "0");
		script.setAttribute("data-input-position", "top");
		script.setAttribute("data-lang", "en");
		script.setAttribute("data-theme", theme);
		script.setAttribute("crossorigin", "anonymous");
		script.async = true;
		if (comments) comments.appendChild(script);
		return () => {
			const comments = document.getElementById(COMMENTS_ID);
			if (comments) comments.innerHTML = "";
		};
	}, [theme]);
	useEffect(() => {
		LoadComments();
	}, [LoadComments]);
	return (
		<div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
			<div className="giscus" id={COMMENTS_ID} />
		</div>
	);
};

export default Giscus;
