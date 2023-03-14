const repos = [
    'Eikanya/Live2d-model',
    'guansss/pixi-live2d-display',
];

const folderBlacklist = [
    // mature models... _(:ι」∠)_

];

const fileBlacklist = [
    // broken file
    'Eikanya/Live2d-model/Sacred Sword princesses/model.json',

    // mature models


    // non-model zip
    'Eikanya/Live2d-model/少女咖啡枪 girls cafe gun/UnityLive2DExtractor+for+ガール・カフェ・ガン.zip',
];

const mocWhitelist = [
    // these moc files are already specified in their settings files
    'Eikanya/Live2d-model/Sacred Sword princesses/boss_cg_live2d_h004/res/iderhelamodel.moc',
    'Eikanya/Live2d-model/Sacred Sword princesses/char_cg_live2d_007/res/dorlamodel.moc',
    'Eikanya/Live2d-model/Sacred Sword princesses/char_cg_live2d_049/res/airmanirmodel.moc',
    'Eikanya/Live2d-model/Sacred Sword princesses/char_cg_live2d_h048/res/ainir.moc',
];

module.exports = {
    repos,
    mocWhitelist,
    folderBlacklist,
    fileBlacklist,
}
