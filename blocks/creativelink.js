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
	blocks.registerBlockType( 'nasir-blocks-gutenberg/creativelink', {
		title: __( 'Creative Links' ),
		icon: 'paperclip',
		category: 'mega_addons',
	    keywords: [
            __('button'),
            __('creative link'),
            __('hover text')
	    ],
	    description: __( 'Creative links button' ),
		attributes: {
	        style: {
	            type: 'string',
	            default: 'cl-effect-1',
	        },
	        align: {
	            type: 'string',
	            default: 'left',
	        },
	        text: {
	            type: 'string',
	            default: 'CREATIVE',
	        },
	        size: {
	            type: 'number',
	            default: '18',
	        },
	        weight: {
	            type: 'string',
	            default: '500',
	        },
	        url: {
	            type: 'string',
	            default: '',
	        },
	        link_target: {
	            type: 'string',
	            default: '_self',
	        },
	        clr: {
	            type: 'string',
	            default: '',
	        },
	        bgclr: {
	            type: 'string',
	            default: '',
	        },
	        hoverclr: {
	            type: 'string',
	            default: '',
	        },
	        hoverbg: {
	            type: 'string',
	            default: '',
	        },
		},
	    edit: function(props) {
		        	
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
		                        options: [
		                        	{label: __('Effect 1'), value: 	'cl-effect-1'},
		                        	{label: __('Effect 2'), value: 	'cl-effect-2'},
		                        	{label: __('Effect 3'), value: 	'cl-effect-3'},
		                        	{label: __('Effect 4'), value: 	'cl-effect-4'},
		                        	{label: __('Effect 5'), value: 	'cl-effect-5'},
		                        	{label: __('Effect 6'), value: 	'cl-effect-6'},
		                        	{label: __('Effect 7'), value: 	'cl-effect-7'},
		                        	{label: __('Effect 8'), value: 	'cl-effect-8'},
		                        	{label: __('Effect 10'), value: 'cl-effect-10'},
		                        	{label: __('Effect 11'), value: 'cl-effect-11'},
		                        	{label: __('Effect 13'), value: 'cl-effect-13'},
		                        ],
		                        label: __('Effect Style'),
		                        value: props.attributes.style,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                style: value
		                            });
		                        },
		                    }
	                    ),
						el(
		                    SelectControl, {
		                        options: [
		                        	{label: __('Left'), 	value: 	'left'},
		                        	{label: __('Center'), 	value: 	'center'},
		                        	{label: __('Right'), 	value: 	'right'},
		                        ],
		                        label: __('Button Align'),
		                        value: props.attributes.align,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                align: value
		                            });
		                        },
		                    }
	                    ),
	                    el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Button Text'),
		                        value: props.attributes.text,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                text: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.size,
		                        label: __('Button Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                size: value,
		                            });
		                        },
		                    }
						),
						el(
		                    SelectControl, {
		                        options: [
		                        	{label: __('100'), 	value: 	'100'},
		                        	{label: __('300'), 	value: 	'300'},
		                        	{label: __('500'), 	value: 	'500'},
		                        	{label: __('600'), 	value: 	'600'},
		                        	{label: __('900'), 	value: 	'900'},
		                        	{label: __('Lighter'), 	value: 	'lighter'},
		                        	{label: __('Normal'), 	value: 	'normal'},
		                        	{label: __('Bold'), 	value: 	'bold'},
		                        ],
		                        label: __('Button Align'),
		                        value: props.attributes.weight,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                weight: value
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
					
					el(
	                	PanelColorSettings, {
	                		title:__('Color Settings'),
	                		initialOpen: false,
	                		colorSettings:[
		                		{
			                        label: __( 'Text Color' ),
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
		                		{
			                        label: __( 'Hover Text Color' ),
			                        value: props.attributes.hoverclr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                hoverclr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Hover Background Color' ),
			                        value: props.attributes.hoverbg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                hoverbg: value
			                            });
			                        },
			                    },
	                		]
	                	},
	                ),
	            ),
	            [!! (props.attributes.style == 'cl-effect-1' || props.attributes.style == 'cl-effect-13') && el(
					'div',
					{ class: 'mega-creative-btn '+props.attributes.style+'', style: {
						'text-align': props.attributes.align,
					},},
		        	el(
						'a',
						{ href: 'javascript:void(0)', style: {
							color:props.attributes.clr,
	            			fontSize:props.attributes.size+'px',
	            			'font-weight':props.attributes.weight,
						},},
						props.attributes.text	
					),
				)
	            ],
	            [!! (props.attributes.style == 'cl-effect-2') && el(
					'div',
					{ class: 'mega-creative-btn '+props.attributes.style+'', style: {
						'text-align': props.attributes.align,
					},},
		        	el(
						'a',
						{ href: 'javascript:void(0)', style: {
							color:props.attributes.clr,
	            			fontSize:props.attributes.size+'px',
	            			'font-weight':props.attributes.weight,
						},},
						el(
						'span',
							{class: 'creativelink', 'data-hover': +props.attributes.text+'',  style: {
								'background':props.attributes.bgclr,
							},},
							el(
								'span',
								{class: 'creativelink-', style: {
									'background':props.attributes.hoverbg,
								},},
								props.attributes.text
							),
							props.attributes.text
						),
					),
				),
	            ],
	            [!! (props.attributes.style == 'cl-effect-5') && el(
					'div',
					{ class: 'mega-creative-btn '+props.attributes.style+'', style: {
						'text-align': props.attributes.align,
					},},
		        	el(
						'a',
						{ href: 'javascript:void(0)', style: {
							color:props.attributes.clr,
	            			fontSize:props.attributes.size+'px',
	            			'font-weight':props.attributes.weight,
						},},
						el(
						'span',
							{class: 'creativelink'},
							el(
								'span',
								{class: 'creativelink-', style: {
									'font-weight': '500',
								},},
								props.attributes.text
							),
							props.attributes.text
						),
					),
				),
	            ],
	            [!! (props.attributes.style == 'cl-effect-3' || props.attributes.style == 'cl-effect-4') && el(
					'div',
					{ class: 'mega-creative-btn '+props.attributes.style+'', style: {
						'text-align': props.attributes.align,
					},},
		        	el(
						'a',
						{ href: 'javascript:void(0)', style: {
							color:props.attributes.clr,
	            			fontSize:props.attributes.size+'px',
	            			'font-weight':props.attributes.weight,
						},},
						props.attributes.text,
						el(
						'span',
							{class: 'creativelink', style: {
								'background': props.attributes.hoverbg,
							},},
						),
					),
				),
	            ],
	            [!! (props.attributes.style == 'cl-effect-6' || props.attributes.style == 'cl-effect-7') && el(
					'div',
					{ class: 'mega-creative-btn '+props.attributes.style+'', style: {
						'text-align': props.attributes.align,
					},},
		        	el(
						'a',
						{ href: 'javascript:void(0)', style: {
							color:props.attributes.clr,
	            			fontSize:props.attributes.size+'px',
	            			'font-weight':props.attributes.weight,
						},},
						el(
						'span',
							{class: 'creativelink', style: {
								'background': props.attributes.bgclr,
							},},
						),
						props.attributes.text,
						el(
						'span',
							{class: 'creativelink-', style: {
								'background': props.attributes.bgclr,
							},},
						),
					),
				),
	            ],
	            [!! (props.attributes.style == 'cl-effect-8') && el(
					'div',
					{ class: 'mega-creative-btn '+props.attributes.style+'', style: {
						'text-align': props.attributes.align,
					},},
		        	el(
						'a',
						{ href: 'javascript:void(0)', style: {
							color:props.attributes.clr,
	            			fontSize:props.attributes.size+'px',
	            			'font-weight':props.attributes.weight,
						},},
						el(
						'span',
							{class: 'creativelink', style: {
								'border': '3px solid '+props.attributes.bgclr,
							},},
						),
						props.attributes.text,
						el(
						'span',
							{class: 'creativelink-', style: {
								'border-color': props.attributes.hoverbg,
							},},
						),
					),
				),
	            ],
	            [!! (props.attributes.style == 'cl-effect-10') && el(
					'div',
					{ class: 'mega-creative-btn '+props.attributes.style+'', style: {
						'text-align': props.attributes.align,
					},},
		        	el(
						'a',
						{ href: 'javascript:void(0)', style: {
							color:props.attributes.clr,
	            			fontSize:props.attributes.size+'px',
	            			'font-weight':props.attributes.weight,
						},},
						el(
						'span',
							{class: 'creativelink', style: {
								color: props.attributes.hoverclr,
								'background': props.attributes.hoverbg,
							},},
							props.attributes.text,
						),
						el(
						'span',
							{class: 'creativelink-', style: {
								color: props.attributes.clr,
								'background': props.attributes.bgclr,
							},},
							props.attributes.text,
						),
					),
				),
	            ],
	            [!! (props.attributes.style == 'cl-effect-11') && el(
					'div',
					{ class: 'mega-creative-btn '+props.attributes.style+'', style: {
						'text-align': props.attributes.align,
					},},
		        	el(
						'a',
						{ href: 'javascript:void(0)', style: {
							color:props.attributes.clr,
	            			fontSize:props.attributes.size+'px',
	            			'font-weight':props.attributes.weight,
	            			'border-top': '2px solid transparent',
						},},
						el(
						'span',
							{class: 'creativelink', style: {
								'border-bottom': '2px solid '+props.attributes.hoverclr,
								'color': props.attributes.hoverclr,
							},},
							props.attributes.text,
						),
						props.attributes.text
					),
				),
	            ],
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