export default function SortForm(sortPoke, setSortPoke) {
	return (
		<div>
			<select
				aria-label='sort'
				value={sortPoke}
				onChange={(e) => setSortPoke(e.target.value)}
			>
				<option value='asc'>ASC</option>
				<option value='desc'>DESC</option>
			</select>
		</div>
	);
}
