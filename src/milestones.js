import * as React from 'react';
import { templateExtend, TemplateName } from "@gitgraph/react";

// Custom tags
const mileStoneTagStyle = {
  bgColor: '#03ca9b',
  strokeColor: '#03ca9b',
  borderRadius: 0,
  pointerWidth: 0,
};

const lastReleaseTagStyle = {
  bgColor: 'orange',
  strokeColor: 'orange',
  // borderRadius: 0,
  // pointerWidth: 0,
};

/* <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 30 30"
  height="30"
  width="30"
>
  <rect width="10" height="20" fill="rgb(0, 143, 181)" />
</svg> */
const renderDot = function(commit) {
  return (
    <svg viewBox="0 0 12 30" height={30} width={30}>
      <path fill="#008FB5" d="M0 0H10V20H0z" />
    </svg>
  )
}

export const simplified = templateExtend(TemplateName.Metro, {
  commit: {
    message: {
      displayHash: false,
      displayAuthor: false,
    },
  },
});

const hashPrefix = "h45h";
export function createFixedHashGenerator() {
  let hashIndex = 0;
  return () => `${hashPrefix}${hashIndex++}`;
}

// https://ethereum.org/en/history/
// https://eth.wiki/roadmap/roadmap
// https://en.wikipedia.org/wiki/Ethereum#Launch_and_milestones
export const milestones = (gitgraph) => {
  const master = gitgraph.branch("Ethereum");
  master
    .commit("Frontier 2015-7")
    .tag("Ethereum 1.0")
    .commit("Ice Age 2015-9")
    .tag({
      name: "Ice Age",
      style: mileStoneTagStyle,
    })
    .commit("Homestead 2016-3")
    .tag({
      name: "Homestead",
      style: mileStoneTagStyle,
    })
    .commit({subject: "DAO Fork 2016-7", dotText: '🔧'})
    .commit("Tangerine Whistle 2016-10")
    .commit("Spurious Dragon 2016-11")
    .commit("Byzantium 2017-10")
    .tag({
      name: "Metropolis",
      style: mileStoneTagStyle,
    })
    .commit("Constantinople 2019-2")
    .commit({subject: "Petersburg 2019-2", dotText: '🔧'})
    .commit("Istanbul 2019-12")
    .commit("Muir Glacier 2020-1")
    .tag("Eth1")

  // https://starkware.co/about-us/
  // const starkware = gitgraph.branch("Starkware");
  // starkware.commit("DeversiFi 2020/6").tag("StarkEx")

  // master.checkout();
  // zksync
  // const zksync = gitgraph.branch("zkSync");
  // https://medium.com/matter-labs/zksync-is-live-bringing-trustless-scalable-payments-to-ethereum-9c634b3e6823
  // zksync.commit('zkSync v1.0 2020/6')

  master.checkout();
  const eth2 = gitgraph.branch("Ethereum 2.0");
  eth2
    .commit("Phase 0 (Beacon Chain) 2020-12")
    .tag("Eth2")

  // master.checkout();
  // Optimism
  // const optimism = gitgraph.branch("Optimism");
  // https://blog.synthetix.io/l2-mainnet-launch/
  // optimism.commit('Synthetix staking 2021/1')

  // starkware.commit("dYdX 2021/4")
  // starkware.commit("Immutable X 2021/4")

  master
    .commit("Berlin 2021-4")

  // master.checkout();
  // arbitrum
  // const arbitrum = gitgraph.branch("Arbitrum");
  // arbitrum
  //   .commit('mainnet 2021/9')

  master
    .commit("London (EIP-1559) 2021-8")

  // master.checkout()

  eth2
    .commit("Altair (Light Client) 2021-10") // light client support

  // eth2.checkout()

  // optimism.commit('mainnet 2021/10')

  // zksync.commit('mainnet 2021/8');

  // starkware.commit("StarkNet 2021/11")

  master
    .commit("Arrow Glacier 2021-12")
    .tag({
      name: "We are here",
      style: lastReleaseTagStyle,
    })
  master
    .commit("ShangHai 2022-6")
    .tag({
      name: "Execution Layer",
      style: mileStoneTagStyle,
    })
  // .commit("Paris 2022-")

  eth2
    .merge(master, "Bellatrix 2022-6")
    .tag({
      name: "Consensus Layer",
      style: mileStoneTagStyle,
    })

  eth2.commit({
    subject: '',
    renderDot: renderDot,
  })
}
