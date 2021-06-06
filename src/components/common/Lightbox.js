import { useState } from "react"

export const Lightbox = () => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<div className="w-screen h-screen bg-black opacity-25 absolute z-10"
			onClick={() => setIsVisible(!isVisible)}
		>
			{isVisible && <p className="text-white font-bold text-xl">
				VISIBLE VISIBLE VISIBLE VISIBLE VISIBLE VISIBLE VISIBLE VISIBLE VISIBLE VISIBLE
			</p>}
		</div>
	);
}
