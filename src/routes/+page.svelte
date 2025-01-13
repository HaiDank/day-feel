<script lang="ts">
	import chroma from 'chroma-js';
	import { onMount } from 'svelte';

	let slider: HTMLInputElement;
	let display: HTMLDivElement;
	let display2: HTMLDivElement;
	let sliderValue: number = $state(50);
	export const colors = ['#F7E58C', '#EEBB79', '#E2894D', '#9C495D', '#393B57'];

	const scale = chroma.scale(colors).mode('hsl').domain([0, 100]);
	const gradient = scale.colors(100)

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

<section class="flex flex-col items-center justify-center p-96">
	<input
		bind:this={slider}
		bind:value={sliderValue}
		type="range"
		min="0"
		max="100"
		id="color-slider"
		class="slider h-4 w-96 appearance-none rounded-full transition-all"
	/>

	<!-- <div id="display" bind:this={display} class="h-8 w-96"></div> -->
	<div id="display2" bind:this={display2} class="p-5 m-8"></div>
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
