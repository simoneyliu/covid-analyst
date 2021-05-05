function MenuComponent(props: any) {
	return (
		<div>
			<span className="menu-title">Menu</span>

			<span className="covid-title">COVID-19</span>
			<div className="outer-menu">
				<input className="checkbox-toggle" type="checkbox" />
				<div className="hamburger">
					<div></div>
				</div>
				<div className="menu">
					<div>
						<div>
							<ul>
								<li>
									<a href="#">About</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { MenuComponent };
