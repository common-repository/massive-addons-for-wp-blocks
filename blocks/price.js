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
	blocks.registerBlockType( 'nasir-blocks-gutenberg/price', {
		title: __( 'Pricing Table' ),
		icon: 'tagcloud',
		category: 'mega_addons',
	    keywords: [
            __('pricing table'),
            __('pricing list'),
            __('price table')
	    ],
	    description: __( 'Create nice looking price tables' ),
		attributes: {
	        content: {
	            source: 'html',
	            default: '',
	        },
	        price_title: {
	            type: 'string',
	            default: 'Price Title',
	        },
	        titlesize: {
	            type: 'string',
	            default: '24',
	        },
	        price_currency: {
	            type: 'string',
	            default: '$',
	        },
	        price_amount: {
	            type: 'string',
	            default: '299',
	        },
	        amountsize: {
	            type: 'string',
	            default: '75',
	        },
	        price_plan: {
	            type: 'string',
	            default: 'per year',
	        },
	        planesize: {
	            type: 'string',
	            default: '12',
	        },
	        offer_text: {
	            type: 'string',
	            default: '',
	        },
	        offer_bg: {
	            type: 'string',
	            default: '#1e89bf',
	        },
	        btn_text: {
	            type: 'string',
	            default: 'Purchase Now',
	        },
	        btnsize: {
	            type: 'string',
	            default: '17',
	        },
	        btn_url: {
	            type: 'string',
	            default: '',
	        },
	        link_target:{
	        	type:'string',
	        	default:'_self'
	        },
	        title_clr:{
	        	type:'string',
	        	default:'#fff'
	        },
	        feature_clr:{
	        	type:'string',
	        	default:'#000'
	        },
	        top_bg:{
	        	type:'string',
	        	default:'#cf2e2e'
	        },
	        price_bg:{
	        	type:'string',
	        	default:'#fff'
	        },
	        alignment: {
	            type: 'string',
	        },
		},
	    edit: function(props) {
		     	
	        return [!!props.isSelected && el(
	                wp.editor.InspectorControls, {
	                    key: 'inspector'
	                },
				    el( PanelBody, {
				        title: __( 'Price Header' ),
				        initialOpen: true,
					    },
						el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Pricing Title'),
		                        help: __('It will be used as price package name'),
		                        value: props.attributes.price_title,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                price_title: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.titlesize,
		                        label: __('Title Size (px)'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                titlesize: value,
		                            });
		                        },
		                    }
						),
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Currency sign'),
		                        help: __('Write currency sign e.g "$"'),
		                        value: props.attributes.price_currency,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                price_currency: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Amount'),
		                        help: __('Write amount in number e.g 299'),
		                        value: props.attributes.price_amount,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                price_amount: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        label: __('Amount Size (px)'),
		                        value: props.attributes.amountsize,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                amountsize: value,
		                            });
		                        },
		                    }
						),
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Price plan'),
		                        help: __('Price plan e.g "per month"'),
		                        value: props.attributes.price_plan,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                price_plan: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.planesize,
		                        label: __('Plan Size (px)'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                planesize: value,
		                            });
		                        },
		                    }
						),
		            ),

					el( PanelBody, {
				        title: __( 'Offer' ),
				        initialOpen: false,
					    },
						el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Offer Text'),
		                        help: __('Write text for showing special offer in Ribbon e.g BEST'),
		                        value: props.attributes.offer_text,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                offer_text: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    PanelColorSettings, {
		                        colorSettings: [{
			                        value: props.attributes.offer_bg,
		                        	label: __( 'Offer Background' ),
			                        onChange: function(value) {
			                            props.setAttributes({
			                                offer_bg: value
			                            })
			                        }
		                        },]
		                    },
		                ),
		            ),

					el( PanelBody, {
					        title: __( 'Button' ),
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
		                    FontSizePicker,
		                    {
		                        value: props.attributes.btnsize,
		                        label: __('Button Size (px)'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btnsize: value,
		                            });
		                        },
		                    }
						),
						el(
		                    TextControl, {
		                        label: __('Button Url'),
		                        value: props.attributes.btn_url,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                btn_url: value,
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
			                        label: __( 'Price Title Color' ),
			                        value: props.attributes.title_clr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                title_clr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Feature Color' ),
			                        value: props.attributes.feature_clr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                feature_clr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Header Background color' ),
			                        value: props.attributes.top_bg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                top_bg: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Body Background' ),
			                        value: props.attributes.price_bg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                price_bg: value
			                            });
			                        },
			                    },
	                		]
	                	},
	                ),
	            ),
	            el(
					'div',
					{ class: 'price_table_1 mag-icon-wrap', style:{
            			'background-color':props.attributes.price_bg,
            			'box-shadow':'0 0 9px rgba(0,0,0,0.5), 0 -3px 0px'+ props.attributes.top_bg,
            		},},
			        el(
			        	'div',
						{ class: 'type', style:{
	            			'background-color':props.attributes.top_bg,
	            		},},
	            		el(
				        	'div',
							{ class: 'ribbon-right'},
							el(
					        	'span',
								{ style:{
	            					'background':props.attributes.offer_bg,
	            				},},
	            				props.attributes.offer_text
							)
						),
						el(
							'p',
							{style:{
		            			'font-size':props.attributes.titlesize+'px',
		            			color:props.attributes.title_clr,
		            		},},
							props.attributes.price_title
						)
					),
					el(
						'div',
						{class: 'plan'},
						el(
							'div',
							{class: 'header'},
							el(
					        	'span',
								{ class: 'price_curr', style:{
	            					'color':props.attributes.top_bg,
	            				},},
	            				props.attributes.price_currency
							),
							el(
					        	'span',
								{ class: 'amount', style:{
	            					'color':props.attributes.top_bg,
	            					'font-size':props.attributes.amountsize+'px',
	            				},},
	            				props.attributes.price_amount
							),
							el(
								'p',
								{ class: 'month', style:{
			            			'font-size':props.attributes.planesize+'px',
			            		},},
								props.attributes.price_plan
							)
						),
						el(
			                RichText,
			                {
			                    key: 'editable',
			                    tagName: 'ul',
			                    className: 'content',
			                    multiline: 'li',
		                        onChange: function(value) {
		                            props.setAttributes({
		                                content: value
		                            });
		                        },
			                    value: props.attributes.content,
			                }
			            ),
			            el(
							'div',
							{class: 'price'},
							el(
								'a',
								{ href: 'javascript:void(0)', class: 'price-btn', style:{
	            					'font-size':props.attributes.btnsize+'px',
	            					'background-color':props.attributes.top_bg,
	            					'box-shadow':'inset 0 -2px'+ props.attributes.top_bg,
	            					'-webkit-box-shadow':'inset 0 -2px'+ props.attributes.top_bg,
	            				},},
	            				props.attributes.btn_text
							),
						),
					),
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