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

export const milestones = (gitgraph) => {
  // https://en.wikipedia.org/wiki/Ethereum#Launch_and_milestones
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

  // const bsc = gitgraph.branch("Binance Smart Chain");
  // bsc
  //   .commit('init 2020/4')
  //   .commit('Lagrange 2021/2')

  const eth2 = gitgraph.branch("Ethereum 2.0");
  eth2
    .commit("Phase 0 (Beacon Chain) 2020-12")
    .tag("Eth2")

  master
    .commit("Berlin 2021-4")
    .tag({
      name: "We are here",
      style: lastReleaseTagStyle,
    })

  eth2.commit("Altair (Light Client) 2021-6") // light client support
  master
    .commit("London (EIP-1559) 2021-7")
    // .commit("ShangHai")

  eth2
    .merge(master, "The Merge")
    .tag({
      name: "Serenity",
      style: mileStoneTagStyle,
    })
}