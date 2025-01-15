<script lang="ts">
	import { dayjs } from '$lib/dayjs';

	import * as Tooltip from '../tooltip';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import clsx from 'clsx';
	import { default as DayJS } from 'dayjs';

	const now = dayjs();
	const currentYear = now.year();
	const months = DayJS.monthsShort();
	let monthPosition: number[] = $state([]);
	const beginMonthDayStyle = `border-t-black border-s-black rounded-s-none rounded-t-none`;
	const beginDaysStyle = `border-s-black rounded-s-none`;
	
	const firstDayWeekDay = dayjs(`${currentYear}-01-01`).day();

	// Generate an array of all days in the year
	const daysOfYear = Array.from({ length: dayjs(`${currentYear}-12-31`).dayOfYear() }, (_, i) => {
		const obj = dayjs(`${currentYear}-01-01`).add(i, 'day');
		if (obj.date() === 1) {
			monthPosition.push(Math.ceil((i + firstDayWeekDay) / 7) + 2);
		}

		return {
			dayObject: obj,
			dayOfWeek: obj.day(),
			dayOfMonth: obj.date()
		};
	});

	const rowPos = {
		0: `row-start-2`,
		1: `row-start-3`,
		2: `row-start-4`,
		3: `row-start-5`,
		4: `row-start-6`,
		5: `row-start-7`,
		6: `row-start-8`
	};
	
</script>

<div class="grid h-fit w-fit grid-flow-col grid-cols-[repeat(54,minmax(0,1fr))] grid-rows-8 gap-0">
	<div class="row-span-7 grid grid-rows-subgrid text-xs font-semibold">
		<span class="row-start-2 flex items-center"> Mon </span>
		<span class="row-start-4 flex items-center"> Wed </span>
		<span class="row-start-6 flex items-center"> Fri </span>
	</div>

	{#each daysOfYear as day, index (index)}
		<Popover.Root>
			<Popover.Trigger
				class={clsx(
					index === 0 && rowPos[day.dayOfWeek],
					day.dayOfMonth === 1
						? beginMonthDayStyle
						: day.dayOfMonth < 8
							? beginDaysStyle
							: 'border-slate-50',
					'calendar-item h-6 w-6 rounded border bg-slate-400 p-0'
				)}
				><Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<div class="calendar-item h-6 w-6"></div>
						</Tooltip.Trigger>
						<Tooltip.Content>
							{day.dayObject.format('LL')}
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider></Popover.Trigger
			>
			<Popover.Content>Place content for the popover here.</Popover.Content>
		</Popover.Root>
	{/each}

	<div
		class="col-span-full grid w-full grid-flow-row grid-cols-subgrid grid-rows-subgrid text-xs font-semibold"
	>
		{#each months as month, index (index)}
			<span
				class={clsx(
					'flex items-center justify-center w-full',
					monthPosition.length === 12 && `col-start-[${monthPosition[index]}]`
				)}
			>
				{month}</span
			>
		{/each}
	</div>
</div>

<style>
	.calendar-item:hover {
		box-shadow:
			5px 5px 5px rgba(0, 0, 0, 1) inset,
			-4px -4px -4px white inset;
	}
</style>
