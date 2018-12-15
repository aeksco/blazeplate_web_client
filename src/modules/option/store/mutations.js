import {
  COLLECTION_MUTATIONS,
  SELECT_MODEL_MUTATIONS,
  NEW_MODEL_MUTATIONS,
  EDIT_MODEL_MUTATIONS
} from '@codotype/ui/src/store/lib/mixins'

// Attribute Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...SELECT_MODEL_MUTATIONS,
  ...NEW_MODEL_MUTATIONS,
  ...EDIT_MODEL_MUTATIONS
}
