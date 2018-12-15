import {
  COLLECTION_GETTERS,
  SELECT_MODEL_GETTERS,
  NEW_MODEL_GETTERS,
  EDIT_MODEL_GETTERS
} from '@codotype/ui/src/store/lib/mixins'

// Relation Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...SELECT_MODEL_GETTERS,
  ...NEW_MODEL_GETTERS,
  ...EDIT_MODEL_GETTERS
}
