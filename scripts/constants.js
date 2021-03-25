// import config
const { tokenInfo, multiSigOwner } = require('../config/config')

const { advisors } = require('../config/advisors')

const { community } = require('../config/community')
const { stakingInfo } = require('../config/community_breakup/staking')
const { nfts } = require('../config/community_breakup/gratitude/nfts')
const { airdrop } = require('../config/community_breakup/gratitude/airdrop')

const { investors } = require('../config/investors')
const { team } = require('../config/team')
const { foundation } = require('../config/foundation')

const { tokens, dateToEpoch, timeInSecs, CONSTANT_100K, CONSTANT_1M } = require('../helpers/utils')

const VESTING_INFO = {
  owner: '',
  advisors: advisors,
  community: community,
  team: team,
  investors: investors,
  foundation: foundation
}

const DISTRIBUTION_INFO = {
  total: tokens(100 * CONSTANT_1M),
  advisors: advisors.deposit.tokens,
  commreservoir: community.commreservoir.deposit.tokens,
  publicsale: community.publicsale.deposit.tokens,
  strategic: community.strategic.deposit.tokens,
  lprewards: stakingInfo.helpers.getLiquidityDistributionAmount(),
  staking: stakingInfo.helpers.getPushDistributionAmount(),
  nfts: nfts.tokens,
  team: team.deposit.tokens,
  foundation: foundation.deposit.tokens,
}

const STAKING_INFO = {
  stakingInfo: stakingInfo,
  stakingAmount: stakingInfo.helpers.getPushDistributionAmount().add(stakingInfo.helpers.getLiquidityDistributionAmount())
}

const META_INFO = {
  eventualOwner: multiSigOwner
}

const NFT_INFO = {
  nfts: nfts
}

const AIRDROP_INFO = {
  airdrop: airdrop
}

module.exports = {
  VESTING_INFO,
  DISTRIBUTION_INFO,
  META_INFO,
  STAKING_INFO,
  NFT_INFO,
  AIRDROP_INFO
}
