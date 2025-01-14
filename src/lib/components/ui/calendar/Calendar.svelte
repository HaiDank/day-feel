<script lang="ts">
	import dayjs from "dayjs";
    import isLeapYear from 'dayjs/plugin/isLeapYear'
    dayjs.extend(isLeapYear)
    const now = dayjs();

    let year: number = $state(now.year())    
    let days: number = $state(365)


    if(now.isLeapYear()) {
        days = 366
    }

</script>

<div class="flex flex-col flex-wrap gap-0 w-full h-44 bg-red-400">

    {#each {length: days}}
    <div class="w-6 h-6 bg-slate-400 rounded-sm border border-white">
    </div>
    {/each}
</div>