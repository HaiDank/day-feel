<script lang="ts">
	import chroma from 'chroma-js';
	import { onMount } from 'svelte';
	import { colorScheme } from '../store/store';
	import { Slider } from '$lib/components/ui/slider';
	import Calendar from '$lib/components/ui/calendar/Calendar.svelte';
	import ColorSchemePicker from '$lib/components/ui/color-scheme-picker/ColorSchemePicker.svelte';

	let slider: HTMLInputElement;
	let display: HTMLDivElement;
	let display2: HTMLDivElement;
	let sliderValue: number = $state(50);
	// let colors: string[]
	// colorScheme.subscribe(value => {
	// 	colors = value
	// })

	const scale = chroma.scale($colorScheme).mode('hsl').domain([0, 100]);
	const gradient = scale.colors(100);

	$effect(() => {
		slider.style.background = `linear-gradient(to right, ${gradient.join(', ')})`;
		// display.style.background = `linear-gradient(to right, ${gradient.join(', ')})`;
		display2.style.backgroundColor = scale(sliderValue).css();
	});
</script>

<svelte:head>
	<title>Color Calendar</title>
	<meta name="description" content="rate day's feeling based on color" />
</svelte:head>

<section class="flex h-full flex-1 w-full items-center flex-col justify-center gap-8 bg-slate-50">
	<Calendar />

	<div>

		<input
		bind:value={sliderValue}
		bind:this={slider}
		type="range"
		min="0"
		max="100"
		id="color-slider"
		class={`slider h-3 w-96 appearance-none rounded-full transition-all`}
		/>
		
		<!-- <div id="display" bind:this={display} class="h-8 w-96"></div> -->
		<div id="display2" bind:this={display2} class="m-8 p-5"></div>
		
		<ColorSchemePicker />
	</div>

</section>

<style>
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		border: 2px solid black;
		background: #fff;
		cursor: pointer;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.slider::-webkit-slider-thumb:hover {
		background: #ddd;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		border: 5px solid black;
		background: #fff;
		cursor: pointer;
	}
</style>
