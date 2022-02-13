const main = async () => {
  const MetaSchool = await ethers.getContractFactory('MetaSchool');
  const metaSchool = await MetaSchool.deploy();

  await metaSchool.deployed();

  console.log(`MetaSchool address: ${metaSchool.address}`);
};

main()
  .then(() => process.exit(0))
  .catch(console.log);
