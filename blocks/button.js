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
	blocks.registerBlockType( 'nasir-blocks-gutenberg/button', {
		title: __( 'Advanced Button' ),
		icon: 'admin-links',
		category: 'mega_addons',
	    keywords: [
            __('button'),
            __('creative link'),
            __('link')
	    ],
	    description: __( 'create stylish button' ),
		attributes: {
			id: {
	            type: 'string',
	            default: 'btn12',
	        },
	        btn_animation: {
	            type: 'string',
	            default: 'hvr-fade',
	        },
	        btnalign: {
	            type: 'string',
	            default: 'left',
	        },
	        btntext: {
	            type: 'string',
	            default: 'Creative Button',
	        },
	        btntext2: {
	            type: 'string',
	            default: 'Go!',
	        },
	        leftpadding: {
	            type: 'string',
	            default: '20',
	        },
	        toppadding: {
	            type: 'string',
	            default: '10',
	        },
	        btnsize: {
	            type: 'string',
	            default: '18',
	        },
	        url: {
	            type: 'string',
	            default: '',
	        },
	        link_target: {
	            type: 'string',
	            default: '_self',
	        },
	        border_width: {
	            type: 'string',
	            default: '0',
	        },
	        btnradius: {
	            type: 'string',
	            default: '5',
	        },
	        btn_border: {
	            type: 'string',
	            default: '#269CE9',
	        },
	        btnclr: {
	            type: 'string',
	            default: '#ddd',
	        },
	        btnbg: {
	            type: 'string',
	            default: '#269CE9',
	        },
	        hoverclr: {
	            type: 'string',
	            default: '#ddd',
	        },
	        hoverbg: {
	            type: 'string',
	            default: '#269CE9',
	        },
	        content: {
	            source: 'html',
	            default: 'Alert content is here, click to edit it.',
	        },
	        style: {
	            type: 'string',
	            default: 'primary',
	        },
	        text_color: {
	            type: 'string',
	            default: '',
	        },
	        bg_color: {
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
				        title: __( 'General' ),
				        initialOpen: true,
					    },
					    el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Unique ID'),
		                        help: __('ID must be unique for each button'),
		                        value: props.attributes.id,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                id: value
		                            });
		                        },
		                    }
		                ),
						el(
	                        SelectControl, {
	                            label: __('Button Effect'),
	                            options: [
	                            	{label: __('Fade'), value: 'hvr-fade'},
	                            	{label: __('Winona'), value: 'button--winona'},
	                            	{label: __('Rayen'), value: 'button--rayen'},
	                            	{label: __('Moema'), value: 'button--moema'},
	                            	{label: __('Ujarak'), value: 'button--ujarak'},
	                            ],
	                            value: props.attributes.btn_animation,
	                            onChange: function(value) {
	                                props.setAttributes({
	                                    btn_animation: value
	                                });
	                            },
	                        }
	                    ),
	                    el(
	                        SelectControl, {
	                            label: __('Button Alignment'),
	                            options: [
	                            	{label: __('Left'), 	value: 'left'},
	                            	{label: __('Center'), 	value: 'center'},
	                            	{label: __('Right'), 	value: 'right'},
	                            ],
	                            value: props.attributes.btnalign,
	                            onChange: function(value) {
	                                props.setAttributes({
	                                    btnalign: value
	                                });
	                            },
	                        }
	                    ),
	                 	//    el(
		                //     AlignmentToolbar, {
		                //         label: __('Alignment'),
		                //         value: props.attributes.alignment,
		                //         onChange: function(value) {
		                //             props.setAttributes({
		                //                 alignment: value
		                //             });
		                //         },
		                //     }
		                // ),
	                    el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Padding [Top Bottom]px'),
		                        help: __('It will increase height of button e.g 10'),
		                        value: props.attributes.toppadding,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                toppadding: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Padding [Left Right]px'),
		                        help: __('It will increase width of button e.g 20'),
		                        value: props.attributes.leftpadding,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                leftpadding: value
		                            });
		                        },
		                    }
		                ),
	                    el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Button Text'),
		                        value: props.attributes.btntext,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btntext: value
		                            });
		                        },
		                    }
		                ),
		                [!! (props.attributes.btn_animation == 'button--winona') && el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Button Text 2'),
		                        help: __('It will show on hover'),
		                        value: props.attributes.btntext2,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btntext2: value
		                            });
		                        },
		                    }
		                ),
		                ],
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Font Size (px)'),
		                        help: __('It will increase width of button e.g 18'),
		                        value: props.attributes.btnsize,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btnsize: value
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
				        title: __( 'Border Setting' ),
				        initialOpen: false,
					    },
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
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Border Radius (px)'),
		                        help: __('button shape will change to circle from edges on increasing value'),
		                        value: props.attributes.btnradius,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btnradius: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    PanelColorSettings, {
		                        colorSettings: [{
			                        value: props.attributes.btn_border,
		                        	label: __( 'Border Color' ),
			                        onChange: function(value) {
			                            props.setAttributes({
			                                btn_border: value
			                            })
			                        }
		                        },]
		                    },
		                ),
		            ),
					
					el(
	                	PanelColorSettings, {
	                		title:__('Color Settings'),
	                		initialOpen: false,
	                		colorSettings:[
			                    {
			                        label: __( 'Text Color' ),
			                        value: props.attributes.btnclr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                btnclr: value
			                            });
			                        },
			                    },
		                		{
			                        label: __( 'Button Background' ),
			                        value: props.attributes.btnbg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                btnbg: value
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
			                        label: __( 'Button Hover Background' ),
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
	            el(
					'div',
					{ className: 'mag-icon-wrap', style:{
	            		'justify-content':props.attributes.btnalign,
	            		'display': 'flex',
	            	},},
			        el(
						'a',
						{ class:'mega-uae-btn mega-uae-btn-'+some_id+' '+props.attributes.btn_animation+'', href: 'javascript:void(0)', style:{
		            		'color':props.attributes.btnclr,
		            		'background':props.attributes.btnbg,
		            		'border':props.attributes.border_width+'px solid'+ props.attributes.btn_border,
		            		'border-radius':props.attributes.btnradius+'px',
		            		'font-size':props.attributes.btnsize+'px',
		            		'padding':props.attributes.toppadding+'px '+ props.attributes.leftpadding+'px',
		            	},},
		            	el(
							'span',
							{},
							props.attributes.btntext
						),
						[!! (props.attributes.btn_animation == 'button--winona') && el(
							'span',
							{class: 'modal-popup-after', style:{
		            			'background':props.attributes.hoverbg,
		            			'padding':props.attributes.toppadding+'px 0',
		            			'color':props.attributes.hoverclr,
		            		},},
							props.attributes.btntext2
						),
						],
						[!! (props.attributes.btn_animation == 'button--rayen') && el(
							'span',
							{class: 'modal-popup-before', style:{
		            			'background':props.attributes.hoverbg,
		            			'padding':props.attributes.toppadding+'px 0',
		            			'color':props.attributes.hoverclr,
		            		},},
							props.attributes.btntext2
						),
						],
						[!! (props.attributes.btn_animation == 'button--ujarak') && el(
							'span',
							{class: 'modal-popup-before', style:{
		            			'background':props.attributes.hoverbg,
		            			'padding':props.attributes.toppadding+'px 0',
		            			'color':props.attributes.hoverclr,
		            		},},
							
						),
						],
						el('style', 
			            	null,
			            	'.mega-uae-btn-'+some_id+'.hvr-fade:hover, .mega-uae-btn-'+some_id+'.button--moema:hover{color: '+props.attributes.hoverclr+' !important; background: '+props.attributes.hoverbg+' !important;} .mega-uae-btn-'+some_id+'.button--ujarak:hover {color: '+props.attributes.hoverclr+' !important;}',
			            ),
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