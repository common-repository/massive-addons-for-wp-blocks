/**
 * Alerts Blocks for Gutenberg 
 *
 */
( function( blocks, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
    Fragment = wp.element.Fragment
    registerBlockType = wp.blocks.registerBlockType,
    RichText = wp.editor.RichText,
    BlockControls = wp.editor.BlockControls,
    AlignmentToolbar = wp.editor.AlignmentToolbar;
	var PanelColorSettings = wp.editor.PanelColorSettings;
	var FontSizePicker = wp.editor.FontSizePicker;
	var PanelBody = wp.components.PanelBody;
	var TextControl = wp.components.TextControl;
	var MediaUpload = wp.editor.MediaUpload;
	var ColorPalette = wp.components.ColorPalette;
	var SelectControl = wp.components.SelectControl;

	/**
	 * Alert Block
	 * @return {null}       Rendered through PHP
	 */
	blocks.registerBlockType( 'nasir-blocks-gutenberg/int-banner', {
		title: __( 'Interactive Banner' ),
		icon: 'visibility',
		category: 'mega_addons',
	    keywords: [
            __('interactive'),
            __('banner'),
            __('hover effect')
	    ],
	    description: __( 'Display interactive banner' ),
		attributes: {
	        effects: {
	        	type: 'string',
	            default: 'effect-lily',
	        },
	        image_id: {
	            type: 'string',
	            default: nbg_vars.nbg_assets_dir+'/images/placeholder.gif'
	        },
	        alt: {
	            type: 'string',
	            default: '',
	        },
	        height: {
	            type: 'string',
	            default: '',
	        },
	        url: {
	            type: 'string',
	            default: '',
	        },
	        link_target: {
	            type: 'string',
	            default: '',
	        },
	        title: {
	            type: 'string',
	            default: 'TITLE HERE',
	        },
	        titlesize: {
	            type: 'number',
	            default: '18',
	        },
	        desc: {
	            type: 'string',
	            default: 'We love to see what you design',
	        },
	        descsize: {
	            type: 'number',
	            default: '15',
	        },
	        clr: {
	            type: 'string',
	            default: '#fff',
	        },
	        bgclr: {
	            type: 'string',
	            default: '',
	        },
	        titlesizembl: {
	            type: 'string',
	            default: '16',
	        },
	        descsizmbl: {
	            type: 'string',
	            default: '15',
	        },
	        imgsizmbl: {
	            type: 'string',
	            default: '',
	        },
		},
	    edit: function(props) {

	    	function randomIntFromInterval(min,max) // min and max included
			{
			    return Math.floor(Math.random()*(max-min+1)+min);
			}
			var some_id = randomIntFromInterval(0,500);	

	        return [!!props.isSelected && el(
	                wp.editor.InspectorControls, {
	                    key: 'inspector'
	                },
				    el( PanelBody, {
				        title: __( 'Image' ),
				        initialOpen: true,
					    },
						el(
		                    SelectControl, {
		                        options: [
		                        	{label: __('LILY'), value: 	'effect-lily'},
		                        	{label: __('SADIE'), value: 'effect-sadie'},
		                        	{label: __('HONEY'), value: 'effect-honey'},
		                        	{label: __('LAYLA'), value: 'effect-layla'},
		                        	{label: __('OSCAR'), value: 'effect-oscar'},
		                        	{label: __('MARLEY'), value:'effect-marley'},
		                        	{label: __('RUBY'), value: 	'effect-ruby'},
		                        	{label: __('ROXY'), value: 	'effect-roxy'},
		                        	{label: __('BUBBA'), value: 'effect-bubba'},
		                        	{label: __('ROMEO'), value: 'effect-romeo'},
		                        	{label: __('DEXTER'), value:'effect-dexter'},
		                        	{label: __('SARAH'), value:  'effect-sarah'},
		                        	{label: __('CHICO'), value: 'effect-chico'},
		                        	{label: __('MILO'), value: 	'effect-milo'},
		                        	{label: __('GOLIATH'), value: 'effect-goliath'},
		                        	{label: __('APOLLO'), value: 'effect-apollo'},
		                        	{label: __('MOSES'), value:  'effect-moses'},
		                        	{label: __('JAZZ'), value: 	 'effect-jazz'},
		                        	{label: __('LEXI'), value: 	 'effect-lexi'},
		                        ],
		                        label: __('Effects'),
		                        value: props.attributes.effects,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                effects: value
		                            });
		                        },
		                    }
	                    ),
						el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Provide URL or Upload Image'),
		                        value: props.attributes.image_id,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                image_id: value
		                            });
		                        },
		                    }
		                ),						
						el( MediaUpload, {
							onSelect: function(media){
	                            props.setAttributes({
	                                image_id: media.url
	                            });
							},
							allowedTypes: ['image'],
							value: props.attributes.image_id,
							render: function( obj ) {
								return el( wp.components.Button, {
									className: 'button button-secondary media-btn-margin',
									onClick: obj.open
									},
									__( 'Upload Image' )
								);
							}
						}),

						el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Image alternative text'),
		                        help: __('It will be used for alt attribute of img tag'),
		                        value: props.attributes.alt,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                alt: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Image Height (px)'),
		                        help: __('set image height in pixel or leave blank'),
		                        value: props.attributes.height,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                height: value
		                            });
		                        },
		                    }
			            ),
			            el(
		                    TextControl, {
		                        label: __('Button Url'),
		                        value: props.attributes.url,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                url: value,
		                            });
		                        },
		                    }
	                    ),
	                    el(
	                        SelectControl, {
	                            label: __('Click Behavior'),
	                            options: [
	                            	{label: __('Same Tab'), value: '_self'},
	                            	{label: __('New Tab'), value: '_blank'},
	                            ],
	                            value: props.attributes.link_target,
	                            onChange: function(value) {
	                                props.setAttributes({
	                                    link_target: value
	                                });
	                            },
	                        }
	                    ),
		            ),


                    el( PanelBody, {
				        	title: __('Heading and Description' ),
				        	initialOpen: false,
						},
						
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Title'),
		                        value: props.attributes.title,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                title: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.titlesize,
		                        label: __('Title Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                titlesize: value,
		                            });
		                        },
		                    }
						),
		                el(
		                    TextControl, {
		                        type: 'textarea',
		                        label: __('Description'),
		                        value: props.attributes.desc,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                desc: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.descsize,
		                        label: __('Font Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                descsize: value,
		                            });
		                        },
		                    }
						),

						el(
		                    PanelColorSettings, {
		                    	colorSettings:[
			                    {
			                        label: __( 'Content Color' ),
			                        value: props.attributes.clr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                clr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Background Color' ),
			                        value: props.attributes.bgclr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                bgclr: value
			                            });
			                        },
			                    },
	                		]
		                    },
		                ),
		            ),

					el( PanelBody, {
				        	title: __('Typography' ),
				        	initialOpen: false,
						},
						
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Title Size (For Mobile)'),
		                        value: props.attributes.titlesizembl,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                titlesizembl: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Description Size (For Mobile)'),
		                        value: props.attributes.descsizmbl,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                descsizmbl: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Image Size (For Mobile)'),
		                        value: props.attributes.imgsizmbl,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                imgsizmbl: value
		                            });
		                        },
		                    }
		                ),
		            ),

	            ),
	            el(
					'div',
					{ class: 'grid vc-interactive-banner', id: 'vc-interactive-banner-'+some_id+''},
			        el(
			            'figure',
			            { className: props.attributes.effects, style: {
							'background':props.attributes.bgclr,
							'width': '100%',
		        		},},
		        		el(
							'img',
							{ src: props.attributes.image_id, alt: props.attributes.alt, style:{
		            			'height':props.attributes.height+'px',
		            			'width': '100%',
		            		},},
						),
						el(
			            	'figcaption',
			            	{},
			            	el(
				            	'div',
				            	{},
				            	el(
					            	'h2',
					            	{style: {
					            		'font-size': props.attributes.titlesize,
					            		'color': props.attributes.clr,
					            		'font-weight': '500',
					            	},},
					            	props.attributes.title
					            ),
					            el(
					            	'p',
					            	{style: {
					            		'font-size': props.attributes.descsize,
					            		'color': props.attributes.clr,
					            	},},
					            	props.attributes.desc
					            ),
					            el(
									'a',
									{href: 'javascript:void(0)', style: {
										// 'color': props.attributes.btn_clr,
									},},
								),
				            )
			            ),
			        )					
				),
				el('style', 
	            	null,
	            	'@media only screen and (max-width: 480px) { #vc-interactive-banner-'+some_id+' h2 {font-size: '+props.attributes.titlesizembl+'px !important;} #vc-interactive-banner-'+some_id+' p {font-size: '+props.attributes.descsizmbl+'px !important;} #vc-interactive-banner-'+some_id+' img {height: '+props.attributes.imgsizmbl+'px !important;}}',
	            ),
	        ];
	    },
		save: function(props) {
	        return el( RichText.Content, {
	            value: props.attributes.content
	        } );
		},
	});

} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element
);