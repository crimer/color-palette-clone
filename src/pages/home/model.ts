import { createEffect, createEvent, createStore } from 'effector'

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
const getPaletts = createEffect('load paletts')
getPaletts.use(async () => {
	const res = await fetch('/data.json')
	const data = await res.json()
	return data
})

const getPalette = (paletteId) => {
  $paletteStore.getState().find(p => p.id === paletteId)
}

$isLoading
	.on(getPaletts, () => true)
	.on(getPaletts.done, () => false)
	.on(getPaletts.fail, () => false)

$paletteStore
	.on(getPaletts, () => [])
	.on(getPaletts.doneData, (state, data) => {
		console.log(data)
		return data.paletts
	})

$error
	.on(getPaletts, () => null)
	.on(getPaletts.fail, (state, res) => console.log('errors', res))

export {
  $paletteStore,
  $paletteCount,
  $isLoading,
  $error,
  getPalette,
  getPaletts,
  createPalette,
  deletePalette,
  editPalette,
}

