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
	var TextControl = wp.components.TextControl;
	InnerBlocks = wp.editor.InnerBlocks;
	var SelectControl = wp.components.SelectControl;

	/**
	 * Alert Block
	 * @return {null}       Rendered through PHP
	 */
	blocks.registerBlockType( 'nasir-blocks-gutenberg/accordion', {
		title: __( 'Accordion' ),
		icon: 'plus-alt',
		category: 'mega_addons',
	    keywords: [
            __('accordion'),
            __('warning'),
            __('notice')
	    ],
	    description: __( 'Vertically stacked list of items' ),
		attributes: {
	        content: {
	            source: 'html',
	            default: 'Alert content is here, click to edit it.',
	        },
	        active: {
	            type: 'string',
	            default: 'false',
	        },
	        animation: {
	            type: 'string',
	            default: '350',
	        },
	        event: {
	            type: 'string',
	            default: 'click',
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
	        return [!!props.isSelected && el(
	                wp.editor.InspectorControls, {
	                    key: 'inspector'
	                },
				    el( PanelBody, {
				        title: __( 'Settings' ),
				        initialOpen: true,
					    },
						el(
	                        SelectControl, {
	                            label: __('Tab Open/Close'),
	                            value: props.attributes.active,
	                            options: [
	                            	{label: __('Close'), 	value: 'false'},
	                            	{label: __('Open'), 	value: '0'},
	                            ],
	                            onChange: function(value) {
	                                props.setAttributes({
	                                    active: value
	                                });
	                            },
	                        }
	                    ),
	                    el(
		                    TextControl, {
		                        type: 'number',
		                        label: __('Animation Speed [in millisecond]'),
		                        value: props.attributes.animation,
		                        onChange: function(value) {
		                            props.setAttributes({
		                                animation: value
		                            });
		                        },
		                    }
		                ),
		                el(
	                        SelectControl, {
	                            label: __('Event'),
	                            value: props.attributes.event,
	                            options: [
	                            	{label: __('Click'), 		value: 'click'},
	                            	{label: __('Mouseover'), 	value: 'mouseover'},
	                            ],
	                            onChange: function(value) {
	                                props.setAttributes({
	                                    event: value
	                                });
	                            },
	                        }
	                    ),
		            ),
	            ),
	            el(
					'div',
					{ class: 'mega-accordion', 'data-active': props.attributes.active+'', 'data-anim': +props.attributes.animation+'', 'data-event': props.attributes.event+''},
			        el(
			            Fragment,
			            null,
			            null,
				            el(
				                InnerBlocks,
				                {
				                    allowedBlocks: [ 'nasir-blocks-gutenberg/accordion-slides' ],
				                }
				            )
			        )
				)
	        ];
	    },
		save: function(props) {
	        return el( InnerBlocks.Content );
		},
	});

} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element
);