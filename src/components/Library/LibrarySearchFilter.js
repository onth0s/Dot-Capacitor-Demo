import { consts } from "../../resources/constants";

export const LibrarySearchFilter = ({ title, items }) => {
	return (<div className="bg-red-100">
		<p className="text-lg font-medium">{title}</p>

		<div className="flex px-2">
			{items.map((el, i) => (
				<div key={i} className="" style={{border: '1px solid' + consts.colors.secondary}}>{el}</div>
			))}
		</div>
	</div>);
}
