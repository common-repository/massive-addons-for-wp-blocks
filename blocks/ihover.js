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
	var PanelBody = wp.components.PanelBody;
	var ColorPalette = wp.components.ColorPalette;
	var SelectControl = wp.components.SelectControl;
	var MediaUpload = wp.editor.MediaUpload;
	var TextControl = wp.components.TextControl;
	var TextareaControl = wp.components.TextareaControl;
	var FontSizePicker = wp.editor.FontSizePicker;
	
	
	/**
	 * Alert Block
	 * @return {null}       Rendered through PHP
	 * Design made by Webcodingplace from https://wordpress.org/plugins/mega-blocks-for-gutenberg/
	 */
	blocks.registerBlockType( 'nasir-blocks-gutenberg/ihover', {
		title: __( 'Image Hover Effects' ),
		icon: 'images-alt',
		category: 'mega_addons',
	    keywords: [
            __('Hover'),
            __('warning'),
            __('notice')
	    ],
	    description: __( 'Display image hover styles' ),
		attributes: {
			image_id: {
	            type: 'string',
	            default: nbg_vars.nbg_assets_dir+'/images/placeholder.gif'
	        },
	        alt: {
	            type: 'string',
	            default: '',
	        },
	        width: {
	            type: 'string',
	            default: '',
	        },
	        height: {
	            type: 'string',
	            default: '',
	        },
	        // popup: {
	        //     type: 'string',
	        //     default: '',
	        // },
	        caption_bg: {
	            type: 'string',
	            default: '#7bdcb5',
	        },
	        title_clr: {
	            type: 'string',
	            default: '#fff',
	        },
	        desc_clr: {
	            type: 'string',
	            default: '#fff',
	        },
	        url: {
	            type: 'string',
	            default: '',
	        },
	        link_target: {
	            type: 'string',
	            default: '_self',
	        },
	        effect: {
	            type: 'string',
	            default: '',
	        },
	        border_width: {
	            type: 'string',
	            default: '0',
	        },
	        border_style: {
	            type: 'string',
	            default: '',
	        },
	        border_color: {
	            type: 'string',
	            default: '#fff',
	        },
	        hover_effect: {
	            type: 'string',
	            default: 'circle effect2 left_to_right',
	        },
	        heading: {
	            type: 'string',
	            default: 'Heading',
	        },
	        heading_size: {
	            type: 'string',
	            default: '17',
	        },
	        description: {
	            type: 'string',
	            default: 'Alert content is here,',
	        },
	        desc_size: {
	            type: 'string',
	            default: '13',
	        },
			// image_style : {
			// 	type: 'string',
			// 	default : "square"
			// },
			// hover_style : {
			// 	type: 'string',
			// 	default : 'effect1 left_and_right'
			// },
	  //       description: {
	  //           type: 'string',
	  //           default: 'Alert content is here,',
	  //       },
	  //       heading: {
	  //           type: 'string',
	  //           default: 'Heading',
	  //       },
	  //       image_url: {
			// 	type: 'string',
			// 	default: ''
			// },
	  //       text_color: {
	  //           type: 'string',
	  //           default: '',
	  //       },
	  //       bg_color: {
	  //           type: 'string',
	  //           default: '',
	  //       },
		},
	    edit: function(props) {
		        	
	        return [!!props.isSelected && el(
	                wp.editor.InspectorControls, {
	                    key: 'inspector'
	                },
	                el(
	                    PanelBody, {
	                        title: __('Image'),
	                    },
	                    el(
		                    SelectControl, {
		                        options: [
		                        	{label: __('circle effect2 left to right'), value: 'circle effect2 left_to_right'},
		                        	{label: __('circle effect2 right to left'), value: 'circle effect2 right_to_left'},
		                        	{label: __('circle effect2 top to bottom'), value: 'circle effect2 top_to_bottom'},
		                        	{label: __('circle effect2 bottom to top'), value: 'circle effect2 bottom_to_top'},
		                        	{label: __('circle effect3 left to right'), value: 'circle effect3 left_to_right'},
		                        	{label: __('circle effect3 right to left'), value: 'circle effect3 right_to_left'},
		                        	{label: __('circle effect3 bottom to top'), value: 'circle effect3 bottom_to_top'},
		                        	{label: __('circle effect3 top to bottom'), value: 'circle effect3 top_to_bottom'},
		                        	{label: __('circle effect4 left to right'), value: 'circle effect4 left_to_right'},
		                        	{label: __('circle effect4 right to left'), value: 'circle effect4 right_to_left'},
		                        	{label: __('circle effect4 top to bottom'), value: 'circle effect4 top_to_bottom'},
		                        	{label: __('circle effect4 bottom to top'), value: 'circle effect4 bottom_to_top'},
		                        	{label: __('circle effect5'),				value: 'circle effect5'},
		                        	{label: __('circle effect6 scale up'),		value: 'circle effect6 scale_up'},
		                        	{label: __('circle effect6 scale down'),	value: 'circle effect6 scale_down'},
		                        	{label: __('circle effect6 scale down up'),	value: 'circle effect6 scale_down_up'},
		                        	{label: __('circle effect7 left to right'),	value: 'circle effect7 left_to_right'},
		                        	{label: __('circle effect7 right to left'),	value: 'circle effect7 right_to_left'},
		                        	{label: __('circle effect7 top to bottom'),	value: 'circle effect7 top_to_bottom'},
		                        	{label: __('circle effect7 bottom to top'),	value: 'circle effect7 bottom_to_top'},
		                        	{label: __('circle effect8 left to right'),	value: 'circle effect8 left_to_right'},
		                        	{label: __('circle effect8 right to left'),	value: 'circle effect8 right_to_left'},
		                        	{label: __('circle effect8 top to bottom'),	value: 'circle effect8 top_to_bottom'},
		                        	{label: __('circle effect8 bottom to top'),	value: 'circle effect8 bottom_to_top'},
		                        	{label: __('circle effect9 left to right'),	value: 'circle effect9 left_to_right'},
		                        	{label: __('circle effect9 right to left'),	value: 'circle effect9 right_to_left'},
		                        	{label: __('circle effect9 top to bottom'),	value: 'circle effect9 top_to_bottom'},
		                        	{label: __('circle effect9 bottom to top'),	value: 'circle effect9 bottom_to_top'},
		                        	{label: __('circle effect10 top to bottom'),	value: 'circle effect10 top_to_bottom'},
		                        	{label: __('circle effect10 bottom to top'),	value: 'circle effect10 bottom_to_top'},
		                        	{label: __('square effect1 left and right'),	value: 'square effect1 left_and_right'},
		                        	{label: __('square effect1 top to bottom'),	value: 'square effect1 top_to_bottom'},
		                        	{label: __('square effect1 bottom to top'),	value: 'square effect1 bottom_to_top'},
		                        	{label: __('square effect2'),				value: 'square effect2'},
		                        	{label: __('square effect3 bottom to top'),	value: 'square effect3 bottom to top'},
		                        	{label: __('square effect3 top to bottom'),	value: 'square effect3 top to bottom'},
		                        	{label: __('square effect4'),				value: 'square effect4'},
		                        	{label: __('square effect5 left to right'),				value: 'square effect5 left_to_right'},
		                        	{label: __('square effect5 right to left'),				value: 'square effect5 right_to_left'},
		                        	{label: __('square effect6 from top and bottom'),		value: 'square effect6 from_top_and_bottom'},
		                        	{label: __('square effect6 from left and right'),		value: 'square effect6 from_left_and_right'},
		                        	{label: __('square effect6 top to bottom'),		value: 'square effect6 top_to_bottom'},
		                        	{label: __('square effect6 bottom to top'),		value: 'square effect6 bottom_to_top'},
		                        	{label: __('square effect7'),			value: 'square effect7'},
		                        	{label: __('square effect8 scaleup'),		value: 'square effect8 scale_up'},
		                        	{label: __('square effect8 scaledown'),		value: 'square effect8 scale_down'},
		                        	{label: __('square effect9 bottom to top'),	value: 'square effect9 bottom_to_top'},
		                        	{label: __('square effect9 left to right'),	value: 'square effect9 left_to_right'},
		                        	{label: __('square effect9 right to left'),	value: 'square effect9 right_to_left'},
		                        	{label: __('square effect9 top to bottom'),	value: 'square effect9 top_to_bottom'},
		                        	{label: __('square effect10 left to right'),value: 'square effect10 left_to_right'},
		                        	{label: __('square effect10 right to left'),value: 'square effect10 right_to_left'},
		                        	{label: __('square effect10 top to bottom'),value: 'square effect10 top_to_bottom'},
		                        	{label: __('square effect10 bottom to top'),value: 'square effect10 bottom_to_top'},
		                        	{label: __('square effect11 left to right'),value: 'square effect11 left_to_right'},
		                        	{label: __('square effect11 right to left'),value: 'square effect11 right_to_left'},
		                        	{label: __('square effect11 top to bottom'),value: 'square effect11 top_to_bottom'},
		                        	{label: __('square effect11 bottom to top'),value: 'square effect11 bottom_to_top'},
		                        	{label: __('square effect12 left to right'),value: 'square effect12 left_to_right'},
		                        	{label: __('square effect12 right to left'),value: 'square effect12 right_to_left'},
		                        	{label: __('square effect12 top to bottom'),value: 'square effect12 top_to_bottom'},
		                        	{label: __('square effect12 bottom to top'),value: 'square effect12 bottom_to_top'},
		                        	{label: __('square effect13 left to right'),value: 'square effect13 left_to_right'},
		                        	{label: __('square effect13 right to left'),value: 'square effect13 right_to_left'},
		                        	{label: __('square effect13 top to bottom'),value: 'square effect13 top_to_bottom'},
		                        	{label: __('square effect13 bottom to top'),value: 'square effect13 bottom_to_top'},
		                        ],
		                        label: __('Choose Hover Effect'),
		                        value: props.attributes.hover_effect,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                hover_effect: value
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
		                        label: __('Image Width (px)'),
		                        help: __('set image width in pixel or leave blank'),
		                        value: props.attributes.width,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                width: value
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
				        	title: __( 'Heading and Description' ),
				        	initialOpen: false,
						},
						
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Provide Title'),
		                        value: props.attributes.heading,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                heading: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.heading_size,
		                        label: __('Font Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                heading_size: value,
		                            });
		                        },
		                    }
						),
		                el(
		                    TextareaControl, {
		                        type: 'text',
		                        label: __('Provide Description'),
		                        value: props.attributes.description,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                description: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.desc_size,
		                        label: __('Font Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                desc_size: value,
		                            });
		                        },
		                    }
						),
						el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Border Width (px)'),
		                        value: props.attributes.border_width,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                border_width: value
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
			                        label: __( 'Background Color' ),
			                        value: props.attributes.caption_bg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                caption_bg: value
			                            });
			                        },
			                    },
		                		{
			                        label: __( 'Title Color' ),
			                        value: props.attributes.title_clr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                title_clr: value
			                            });
			                        },
			                    },
		                		{
			                        label: __( 'Description Color' ),
			                        value: props.attributes.desc_clr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                desc_clr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Border Color' ),
			                        value: props.attributes.border_color,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                border_color: value
			                            });
			                        },
			                    },
	                		]
	                	},
	                ),
	            ),
				el(
		            'div',
		            { class: 'ih-item '+props.attributes.hover_effect+'', style:{
            			'width':props.attributes.width+'px',
            			'height':props.attributes.height+'px',
            			'border':props.attributes.border_width+'px solid'+ props.attributes.border_color,
            		},},
		            el(
						'a',
						{ href: 'javascript:void(0)'},
						el(
							'div',
							{class: 'img'},
							el(
								'img',
								{ src: props.attributes.image_id, alt: props.attributes.alt, style:{
			            			'width':props.attributes.width+'px',
			            			'height':props.attributes.height+'px',
			            		},},
							)
						),
						el(
							'div',
							{class: 'info', style:{
			            			backgroundColor:props.attributes.caption_bg,
			            	},},
							el(
								'h3',
								{style:{
			            			color:props.attributes.title_clr,
			            			'font-size':props.attributes.heading_size+'px',
			            		},},
								props.attributes.heading
							),
							el(
								'p',
								{style:{
			            			color:props.attributes.desc_clr,
			            			'font-size':props.attributes.desc_size+'px',
			            		},},
								props.attributes.description
							)
						)
					),
		        )
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