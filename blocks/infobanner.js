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
	var CheckboxControl = wp.components.CheckboxControl;

	/**
	 * Info Banner Block
	 * @return {null}       Rendered through PHP
	 */
	blocks.registerBlockType( 'nasir-blocks-gutenberg/infobanner', {
		title: __( 'Info Banner' ),
		icon: 'images-alt2',
		category: 'mega_addons',
	    keywords: [
            __('info banner'),
            __('banner'),
            __('info')
	    ],
	    description: __( 'Displays the banner information' ),
		attributes: {
	        content: {
	            type: 'string',
	            default: 'Info Banner Content is here, click to edit it.',
	        },
	        alignment: {
	            type: 'string',
	        },
	        pic_width: {
	            type: 'string',
	            default: '50',
	        },
	        content_width: {
	            type: 'string',
	            default: '50',
	        },
	        ribbon_text: {
	            type: 'string',
	            default: 'Best',
	        },
	        style_visibility: {
	            type: 'string',
	            default: 'top_to_bottom',
	        },
	        featured: {
	            type: 'boolean',
	            default: false,
	        },
	        image_id: {
	            type: 'img',
	            default: nbg_vars.nbg_assets_dir+'/images/placeholder.gif'
	        },
	        image_id2: {
	            type: 'string',
	            default: '',
	        },
	        alt: {
	            type: 'string',
	            default: '',
	        },
	        img_padding: {
	            type: 'string',
	            default: '5px 5px 5px 5px',
	        },
	        text_padding: {
	            type: 'string',
	            default: '5px 5px 5px 5px',
	        },
	        pic_size: {
	            type: 'string',
	            default: '',
	        },
	        info_title: {
	            type: 'string',
	            default: 'Info Banner',
	        },
	        title_size: {
	            type: 'number',
	            default: '17',
	        },
	        content_size: {
	            type: 'number',
	            default: '15',
	        },
	        lineheight: {
	            type: 'string',
	            default: '',
	        },
	        btn_text: {
	        	type: 'string',
	        	default: '',
	        },
			btn_ptop: {
				type: 'string',
				default: '7',
			},
			btn_pleft: {
				type: 'string',
				default: '20',
			},
			btn_size: {
				type: 'number',
				default: '15',
			},
			url: {
				type: 'string',
				default: '#0',
			},
			border_style: {
				type: 'string',
				default: '0px solid #000',
			},
			btn_radius: {
				type: 'string',
				default: '5',
			},
			title_color: {
				type: 'string',
				default: '#000',
			},
			desc_color: {
				type: 'string',
				default: '#000',
			},
			ribbon_bg: {
				type: 'string',
				default: '#f78da7',
			},
			btn_clr: {
				type: 'string',
				default: '#fff',
			},
			btn_bg: {
				type: 'string',
				default: '',
			},
			btn_hvrclr: {
				type: 'string',
				default: '#fff',
			},
			btn_hvrbg: {
				type: 'string',
				default: '',
			},
			body_margin: {
				type: 'string',
				default: '0px 0px 0px 0px',
			},
			body_padding: {
				type: 'string',
				default: '0px 0px 0px 0px',
			},
			body_borderWidth: {
				type: 'string',
				default: '0px 0px 0px 0px',
			},
			body_border_style: {
				type: 'string',
				default: 'solid',
			},
			body_borderRadius: {
				type: 'string',
				default: '1',
			},
			body_border_clr: {
				type: 'string',
				default: '#ddd',
			},
			body_bg: {
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

		    var content = props.attributes.content,
		        alignment = props.attributes.alignment;

		    function onChangeContent( newContent ) {
		        props.setAttributes( { content: newContent } );
		    }

		    function onChangeAlignment( newAlignment ) {
		        props.setAttributes( { alignment: newAlignment } );
		    }	    	
	        return [!!props.isSelected && el(
	                wp.editor.InspectorControls, {
	                    key: 'inspector'
	                },
				    el( PanelBody, {
				        title: __( 'General' ),
				        initialOpen: true,
					    },
						el(
	                        SelectControl, {
	                            label: __('Select Style'),
	                            value: props.attributes.style_visibility,
	                            options: [
	                            	{label: __('Top image bottom content'), 	value: 'top_to_bottom'},
	                            	{label: __('Left image right content'), 	value: 'left'},
	                            	{label: __('Left content right image'), 	value: 'right'},
	                            ],
	                            onChange: function(value) {
	                                props.setAttributes({
	                                    style_visibility: value
	                                });
	                            },
	                        }
	                    ),
	                    [!! (props.attributes.style_visibility == 'left' || props.attributes.style_visibility == 'right') && el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Picture Box Width (%)'),
		                        help: __('Set the width of picture box in percentage e.g 50'),
		                        value: props.attributes.pic_width,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                pic_width: value
		                            });
		                        },
		                    }
		                ),
		                ],
		                [!! (props.attributes.style_visibility == 'left' || props.attributes.style_visibility == 'right') && el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Content box width (%)'),
		                        help: __('Set the width of content box in percentage e.g 50'),
		                        value: props.attributes.content_width,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                content_width: value
		                            });
		                        },
		                    }
		                ),
		                ],
						el(
		                    CheckboxControl, {
		                        label: __('Featured Lable'),
		                        checked: props.attributes.featured,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                featured: value,
		                            });
		                        },
		                    }
	                    ),
	                    [!! (props.attributes.featured == true) && el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Featured Text'),
		                        help: __('write featured text for special offer e.g BEST'),
		                        value: props.attributes.ribbon_text,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                ribbon_text: value
		                            });
		                        },
		                    }
		                ),
		                ],
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
						el( 
						MediaUpload, {
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
		                        label: __('Alternate Text'),
		                        help: __('It will be used as alt attribute of img tag'),
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
		                        label: __('Width (px)'),
		                        help: __('Set custom width in pixel or leave blank e.g 100'),
		                        value: props.attributes.pic_size,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                pic_size: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Padding'),
		                        help: __('top right bottom left'),
		                        value: props.attributes.img_padding,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                img_padding: value
		                            });
		                        },
		                    }
		                ),
		            ),
					el( PanelBody, {
				        title: __( 'Content' ),
				        initialOpen: false,
					    },
					    el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Padding'),
		                        help: __('top right bottom left'),
		                        value: props.attributes.text_padding,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                text_padding: value
		                            });
		                        },
		                    }
		                ),
						el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Title'),
		                        value: props.attributes.info_title,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                info_title: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.title_size,
		                        label: __('Title Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                title_size: value
		                            });
		                        },
		                    }
						),
						el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Content FontSize (px)'),
		                        value: props.attributes.content_size,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                content_size: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Line Height'),
		                        help: __('margin between text and description'),
		                        value: props.attributes.lineheight,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                lineheight: value
		                            });
		                        },
		                    }
		                ),
		            ),
					el( PanelBody, {
				        title: __( 'Button Settings' ),
				        initialOpen: false,
					    },
	                    el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Button Text'),
		                        value: props.attributes.btn_text,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btn_text: value
		                            });
		                        },
		                    }
		                ),
					    el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Padding [Top Bottom]px'),
		                        help: __('It will increase height of button e.g 10'),
		                        value: props.attributes.btn_ptop,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btn_ptop: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Padding [Left Right]px'),
		                        help: __('It will increase width of button e.g 20'),
		                        value: props.attributes.btn_pleft,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btn_pleft: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.btn_size,
		                        label: __('Title Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btn_size: value
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
		                    TextControl, {
		                        type: 'text',
		                        label: __('Border Style'),
		                        help: __('width style color'),
		                        value: props.attributes.border_style,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                border_style: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Border Radius (px)'),
		                        help: __('button shape will change to circle from edges on increasing value'),
		                        value: props.attributes.btn_radius,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btn_radius: value
		                            });
		                        },
		                    }
		                ),
		            ),
					el(
	                	PanelColorSettings, {
	                		title:__('Color Settings'),
	                		initialOpen: false,
	                		colorSettings:[
			                    {
			                        label: __( 'Title Color' ),
			                        value: props.attributes.title_color,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                title_color: value
			                            });
			                        },
			                    },
		                		{
			                        label: __( 'Description Color' ),
			                        value: props.attributes.desc_color,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                desc_color: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Featured Background' ),
			                        value: props.attributes.ribbon_bg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                ribbon_bg: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Button Color' ),
			                        value: props.attributes.btn_clr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                btn_clr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Button Background' ),
			                        value: props.attributes.btn_bg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                btn_bg: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Button Hover Color' ),
			                        value: props.attributes.btn_hvrclr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                btn_hvrclr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Button Hover Background' ),
			                        value: props.attributes.btn_hvrbg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                btn_hvrbg: value
			                            });
			                        },
			                    },
	                		]
	                	},
	                ),
					el( PanelBody, {
				        title: __( 'Design Options' ),
				        initialOpen: false,
					    },
	                    el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Margin'),
		                        help: __('top right bottom left'),
		                        value: props.attributes.body_margin,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                body_margin: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Padding'),
		                        help: __('top right bottom left'),
		                        value: props.attributes.body_padding,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                body_padding: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Border Width (px)'),
		                        help: __('top right bottom left'),
		                        value: props.attributes.body_borderWidth,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                body_borderWidth: value
		                            });
		                        },
		                    }
		                ),
		                [!! (props.attributes.body_borderWidth != '') && el(
	                        SelectControl, {
	                            label: __('Border Style'),
	                            options: [
	                            	{label: __('Solid'), 	value: 'solid'},
	                            	{label: __('Dotted'), 	value: 'dotted'},
	                            	{label: __('Ridge'), 	value: 'ridge'},
	                            	{label: __('Dashed'), 	value: 'dashed'},
	                            	{label: __('Double'), 	value: 'double'},
	                            	{label: __('Groove'), 	value: 'groove'},
	                            	{label: __('Inset'), 	value: 'inset'},
	                            ],
	                            value: props.attributes.body_border_style,
	                            onChange: function(value) {
	                                props.setAttributes({
	                                    body_border_style: value
	                                });
	                            },
	                        }
	                    ),
						],
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Border Radius (px)'),
		                        value: props.attributes.body_borderRadius,
		                        onChange: function(value) {
		                            props.setAttributes({
	                                body_borderRadius: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Provide URL or Upload Image'),
		                        value: props.attributes.image_id2,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                image_id2: value
		                            });
		                        },
		                    }
		                ),				
						el( 
						MediaUpload, {
							onSelect: function(media){
	                            props.setAttributes({
	                                image_id2: media.url
	                            });
							},
							allowedTypes: ['image'],
							value: props.attributes.image_id2,
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
		                    PanelColorSettings, {
		                    	colorSettings:[
			                    {
			                        label: __( 'Border Color' ),
			                        value: props.attributes.body_border_clr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                body_border_clr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Background Color' ),
			                        value: props.attributes.body_bg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                body_bg: value
			                            });
			                        },
			                    },
	                		]
		                    },
		                ),
	                ),
	            ),
	            [!! (props.attributes.style_visibility == 'top_to_bottom') && el(
					'div',
					{ class: 'mega-info-bar-'+some_id+'', id: 'mega_info_bar_2', style: {
						'margin': props.attributes.body_margin,
						'padding': props.attributes.body_padding,
						'border-width': props.attributes.body_borderWidth,
						'border-style': props.attributes.body_border_style,
						'border-radius': props.attributes.body_borderRadius+'px',
						'border-color': props.attributes.body_border_clr,
						'background-color': props.attributes.body_bg,
						'background-image': 'url('+props.attributes.image_id2+')',
						'background-size': '100% 100%',
					},},
					[!! (props.attributes.featured == true) && el(
						'div',
						{ class: 'ribbon'},
						el(
							'span',
								{ style: {
									'background-color':props.attributes.ribbon_bg,
								},},
								props.attributes.ribbon_text
						),
					),
					],
					el(
						'div',
						{ class: 'mega_wrap', style: {
							'padding': props.attributes.img_padding,
						},},
						el(
							'img',
							{ src: props.attributes.image_id, style:{
		            			'alt':props.attributes.alt,
		            			'display':'block', 'max-width':'100%',
		            			'width':props.attributes.pic_size+'px',
		            		},},
			            ),
					),
			        el(
			            'div',
			            {class: 'mega_content', style: {
			            	'padding': props.attributes.text_padding,
			            },},
			            el(
			            	'h4',
				            {style: {
				            	'color': props.attributes.title_color,
				            	'font-size': props.attributes.title_size+'px',
				            },},
				            props.attributes.info_title
				        ),
			            el(
			                BlockControls,
			                null,
			                el(
			                    AlignmentToolbar,
			                    {
			                        value: alignment,
			                        onChange: onChangeAlignment,
			                    }
			                )
			            ),
			            el(
			                RichText,
			                {
			                    key: 'editable',
			                    style: { textAlign: alignment, 'font-size': props.attributes.content_size+'px', 'color': props.attributes.desc_color, 'line-height': props.attributes.lineheight },
			                    onChange: onChangeContent,
			                    value: content,
			                }
			            ),
			            [!! (props.attributes.btn_text != '') && el(
						'a',
							{class: 'mega_hvr_btn', href: 'javascript:void(0)', style: {
								'font-size': props.attributes.btn_size+'px',
								'color': props.attributes.btn_clr,
								'background': props.attributes.btn_bg,
								'padding':props.attributes.btn_ptop+'px '+ props.attributes.btn_pleft+'px',
								'border':props.attributes.border_style,
								'border-radius':props.attributes.btn_radius+'px',
								'margin-top':'8px',
							},},
							props.attributes.btn_text
						),
						],
			        )					
				)
				],
				[!! (props.attributes.style_visibility == 'left' || props.attributes.style_visibility == 'right') && el(
					'div',
					{ class: 'mega-info-bar-'+some_id+'', id: 'mega_info_bar', style: {
						'margin': props.attributes.body_margin,
						'padding': props.attributes.body_padding,
						'border-width': props.attributes.body_borderWidth,
						'border-style': props.attributes.body_border_style,
						'border-radius': props.attributes.body_borderRadius+'px',
						'border-color': props.attributes.body_border_clr,
						'background-color': props.attributes.body_bg,
						'background-image': 'url('+props.attributes.image_id2+')',
						'background-size': '100% 100%',
						'display': 'inline-block',
					},},
					[!! (props.attributes.featured == true) && el(
						'div',
						{ class: 'ribbon'},
						el(
							'span',
								{ style: {
									'background-color':props.attributes.ribbon_bg,
								},},
								props.attributes.ribbon_text
						),
					),
					],
					el(
						'div',
						{ class: 'mega_wrap', style: {
							'padding': props.attributes.img_padding,
							'float': props.attributes.style_visibility,
							'width': props.attributes.pic_width-2+'%',
						},},
						el(
							'img',
							{ src: props.attributes.image_id, style:{
		            			'alt':props.attributes.alt,
		            			'display':'block', 'max-width':'100%',
		            			'width':props.attributes.pic_size+'px',
		            		},},
			            ),
					),
			        el(
			            'div',
			            {class: 'mega_content', style: {
			            	'padding': props.attributes.text_padding,
			            	'width': props.attributes.content_width-3+'%',
							// 'height': '-webkit-fill-available',
			            },},
			            el(
			            	'h4',
				            {style: {
				            	'color': props.attributes.title_color,
				            	'font-size': props.attributes.title_size+'px',
				            },},
				            props.attributes.info_title
				        ),
			            el(
			                BlockControls,
			                null,
			                el(
			                    AlignmentToolbar,
			                    {
			                        value: alignment,
			                        onChange: onChangeAlignment,
			                    }
			                )
			            ),
			            el(
			                RichText,
			                {
			                    key: 'editable',
			                    style: { textAlign: alignment, 'font-size': props.attributes.content_size+'px', 'color': props.attributes.desc_color, 'line-height': props.attributes.lineheight },
			                    onChange: onChangeContent,
			                    value: content,
			                }
			            ),
			            [!! (props.attributes.btn_text != '') && el(
						'a',
							{class: 'mega_hvr_btn', href: 'javascript:void(0)', style: {
								'font-size': props.attributes.btn_size+'px',
								'color': props.attributes.btn_clr,
								'background': props.attributes.btn_bg,
								'padding':props.attributes.btn_ptop+'px '+ props.attributes.btn_pleft+'px',
								'border':props.attributes.border_style,
								'border-radius':props.attributes.btn_radius+'px',
								'margin-top':'8px',
							},},
							props.attributes.btn_text
						),
						],
			        )					
				)
				],
				el('style', 
	            	null,
	            	'.mega-info-bar-'+some_id+' .mega_hvr_btn:hover {color: '+props.attributes.btn_hvrclr+' !important; background-color: '+props.attributes.btn_hvrbg+' !important;}',
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