const tf_backend = require('@tensorflow/tfjs-node')
const tensorflow = require("@tensorflow-models/universal-sentence-encoder")

function cosineComparison(vector1, vector2) {
    const dotProduct = vector1.reduce((sum, val, i) => sum + val * vector2[i], 0)
    const magnitude1 = Math.sqrt(vector1.reduce((sum, val) => sum + val ** 2, 0));
    const magnitude2 = Math.sqrt(vector2.reduce((sum, val) => sum + val ** 2, 0));
    return dotProduct / (magnitude1 * magnitude2);
}

async function compareSentences(text1, text2) {
    const model = await tensorflow.load()
    const embeddings = await model.embed([text1, text2])
    const vector1 = embeddings.arraySync()[0]
    const vector2 = embeddings.arraySync()[1]
    return cosineComparison(vector1, vector2)
}

const sentence1 = "basketball football hiking hiking hiking camping seahawks discord rap music rap music rap music"
const sentence2 = ""

compareSentences(sentence1, sentence2).then(console.log)