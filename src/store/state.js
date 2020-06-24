import { createStore, createEvent, createEffect } from 'effector'

// Стор
const $paletteStore = createStore([])
const $paletteCount = $paletteStore.map(p => p.length)
const $isLoading = createStore(false)
const $error = createStore(null)

// События
const createPalette = createEvent('Create Palette')
const deletePalette = createEvent('Delete Palette')
const editPalette = createEvent('Edit Palette')

// Effects
const getPaletts = createEffect('load paletts').use(async () => {
	const res = await fetch('/data.json')
	const data = await res.json()
	return data
})

$isLoading
	.on(getPaletts, () => true)
	.on(getPaletts.done, () => false)
	.on(getPaletts.fail, () => false)

$paletteStore
	.on(getPaletts, () => [])
	.on(getPaletts.done, (state, res) => res.paletts)

$error
	.on(getPaletts, () => null)
	.on(getPaletts.fail, (state, res) => console.log('errors', res))

// что-то делаем когда вызвали setPaletts событие
$paletteStore.on(getPaletts.doneData, (state, data) => data.paletts)

export {
	$paletteStore,
	$paletteCount,
	getPaletts,
	createPalette,
	deletePalette,
	editPalette,
}
