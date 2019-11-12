import React from 'react';

function DownloadButton(props) {
	return props.file ? <a href={props.file} download class="logo-download">{props.type}</a> : null;
}

function LogoCard(props) {
	return (
		<div class="logo-item">
			<h3 class="logo-title">{props.name}</h3>
			<div class="logo-tags">
			{
				props.tags.map(tag =>
					<button>#{tag}</button>
				)
			}

			</div>
			<div class="logo-variants">
			{
				props.variants.map(variant =>
					<div class="logo-variant">
						<img  class="logo-image" src={variant.image.default} alt="" />
						<span class="logo-caption">{variant.title}</span>
						<DownloadButton type="MedRes" file={variant.image.medRes}/>
						<DownloadButton type="HiRes" file={variant.image.hiRes}/>
						<DownloadButton type="Vector" file={variant.image.vector}/>
					</div>
				)
			}

			</div>
		</div>
	);
}

export default LogoCard;
