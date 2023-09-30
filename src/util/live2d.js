import '@/static/js/live2d'
import store from "store";
import axios from "axios";

const LIVE2D_MODEL_NAME = 'ua_live2d'
const GET_URL = 'https://live2d.fghrsh.net/api/get/'
const MODEL_URL = 'http://api.fghrsh.net/live2d/switch/'
const TEXTURES_URL = 'https://api.fghrsh.net/live2d/rand_textures/'

/**
 * 加载模型
 * @param {number} modelId - 模型 ID
 * @param {number} texturesId - 纹理 ID
 */
const loadModel = (modelId, texturesId) => {
  // eslint-disable-next-line no-undef
  loadlive2d('draw', `${GET_URL}?id=${ modelId }-${ texturesId }`)
  store.set(LIVE2D_MODEL_NAME, { modelId: modelId, texturesId: texturesId })
}

/**
 * 获取模型ID
 * @param {number} modelId - 模型ID
 * @returns {Promise<number>} - 模型ID
 */
const getModelId = async (modelId) => {
  const result = await axios.get(`${ MODEL_URL }?id=${ modelId }`)
  return result.data?.model.id
}

/**
 * 获取纹理ID
 * @param {number} textures - 纹理ID
 * @returns {Promise<number>} - 纹理ID
 */
const getTexturesId = async (textures) => {
  const result = await axios.get(`${ TEXTURES_URL }?id=${ textures }`)
  return result.data?.textures.id
}

export { getModelId, getTexturesId, loadModel, LIVE2D_MODEL_NAME }
