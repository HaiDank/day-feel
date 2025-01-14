<script lang="ts">
	import clsx from 'clsx';
	import type { Colord } from 'colord';
	import ColorPicker from 'svelte-awesome-color-picker';

    type Props = {
        isDarkMode?: boolean,
    }

	let { isDarkMode = false } : Props = $props();

	let color: Colord | undefined = $state();

	$effect(() => {

	});
</script>

<div class={clsx(isDarkMode && 'dark')}>
	<ColorPicker bind:color position="responsive" label=""/>
</div>

<style>
	.dark {
		--cp-bg-color: #333;
		--cp-border-color: white;
		--cp-text-color: white;
		--cp-input-color: #555;
		--cp-button-hover-color: #777;
	}
</style>
