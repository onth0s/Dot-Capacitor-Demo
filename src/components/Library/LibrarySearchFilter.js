import { consts } from "../../resources/constants";

export const LibrarySearchFilter = ({ title, items, children }) => {
	return (<>
		<p className="text-lg font-normal mb-2">{title}</p>

		<div className="flex -ml-2 flex-wrap">
			{items.map((el, i) => (
				<div key={i} className="cursor-pointer mx-2 my-1.5 rounded-full h-full text-sm px-2.5 py-1.5"
					style={{
						border: '1px solid' + consts.colors.secondary,
					}}
				>{el}{children}</div>
			))}
		</div>
	</>);
}
