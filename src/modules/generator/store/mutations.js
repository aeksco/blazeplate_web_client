import { COLLECTION_MUTATIONS, SELECT_MODEL_MUTATIONS } from '@codotype/ui/src/store/lib/mixins'

// Generator Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...SELECT_MODEL_MUTATIONS,
  fetching (state, fetching) {
    state.fetching = fetching
  }
}
