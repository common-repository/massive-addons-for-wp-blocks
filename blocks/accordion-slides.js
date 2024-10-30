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
	InnerBlocks = wp.editor.InnerBlocks;
	var MediaUpload = wp.editor.MediaUpload;
	var ColorPalette = wp.components.ColorPalette;
	var SelectControl = wp.components.SelectControl;

	/**
	 * Alert Block
	 * @return {null}       Rendered through PHP
	 */
	blocks.registerBlockType( 'nasir-blocks-gutenberg/accordion-slides', {
		title: __( 'Accordion Items' ),
		icon: 'plus-alt',
		category: 'mega_addons',
	    keywords: [
            __('notification'),
            __('warning'),
            __('notice')
	    ],
	    parent: [ 'mega-blocks-gutenberg/accordion' ],
	    description: __( 'Vertically stacked list of items' ),
		attributes: {
	        content: {
	            source: 'html',
	            default: 'Accordion content is here, click to edit it.',
	        },
	        title: {
	            type: 'string',
	            default: 'Accordion Title',
	        },
	        size: {
	            type: 'number',
	            default: '17',
	        },
	        title_padding: {
	            type: 'string',
	            default: '5',
	        },
	        titlemargin: {
	            type: 'string',
	            default: '0',
	        },
	        borderwidth: {
	            type: 'string',
	            default: '1px 1px 1px 1px',
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
	            default: '#FCB900',
	        },
	        borderclr: {
	            type: 'string',
	            default: '#000',
	        },
	        bodyclr: {
	            type: 'string',
	            default: '#000',
	        },
	        bodybg: {
	            type: 'string',
	            default: '#f8f8f8',
	        },

	        alignment: {
	            type: 'string',
	        },
	        style: {
	            type: 'string',
	            default: 'primary',
	        },
		},
	    edit: function(props) {
		    var content = props.attributes.content,
		    	color = props.attributes.text_color,
		    	bg_color = props.attributes.bg_color,
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
				        title: __( 'Title' ),
				        initialOpen: true,
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
		                        value: props.attributes.size,
		                        label: __('Title Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                size: value,
		                            });
		                        },
		                    }
						),
						el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Title Padding [in px]'),
		                        help: __('It will increase the title section height'),
		                        value: props.attributes.title_padding,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                title_padding: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'text',
		                        label: __('Title Border Width'),
		                        help: __('[top right bottom left]'),
		                        value: props.attributes.borderwidth,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                borderwidth: value
		                            });
		                        },
		                    }
		                ),
		                el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Title Margin [in px]'),
		                        help: __('spaces between titles'),
		                        value: props.attributes.titlemargin,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                titlemargin: value
		                            });
		                        },
		                    }
		                ),
		            ),
					el( PanelBody, {
				        title: __( 'Description' ),
				        initialOpen: false,
					    },
					    el(
		                    FontSizePicker,
		                    {
		                        value: props.attributes.descsize,
		                        label: __('Title Size'),
		                        onChange: function(value) {
		                            props.setAttributes({
		                                descsize: value,
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
			                        value: props.attributes.clr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                clr: value
			                            });
			                        },
			                    },
		                		{
			                        label: __( 'Title Background' ),
			                        value: props.attributes.bgclr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                bgclr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Title Border' ),
			                        value: props.attributes.borderclr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                borderclr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Description Color' ),
			                        value: props.attributes.bodyclr,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                bodyclr: value
			                            });
			                        },
			                    },
			                    {
			                        label: __( 'Description Background' ),
			                        value: props.attributes.bodybg,
			                        onChange: function(value) {
			                            props.setAttributes({
			                                bodybg: value
			                            });
			                        },
			                    },
	                		]
	                	},
	                ),
	            ),
	            el(
					'h3',
					{ class: 'ac-style', style: {
						color:props.attributes.clr,
						'background':props.attributes.bgclr,
						'font-size':props.attributes.title_size+'px',
						'margin-top':props.attributes.titlemargin+'px',
						'border-width':props.attributes.borderwidth,
						'border-color':props.attributes.borderclr,
						'border-style':'solid',
						'padding-top':props.attributes.title_padding+'px',
						'padding-bottom':props.attributes.title_padding+'px',
					},},
					props.attributes.title							
				),
	            el(
	                RichText,
	                {
	                    key: 'editable',
	                    tagName: 'div',
	                    className: 'mega-panel',
	                    style: {'background-color': props.attributes.bodybg, 'color': props.attributes.bodyclr },
	                    onChange: onChangeContent,
	                    value: content,
	                }
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