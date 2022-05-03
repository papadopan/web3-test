import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";


describe("Hello World test suite", ()=>{
  it("should say Hello World", async ()=>{
      // 1 setup environment
      // 2 deploy contract
      // 3 call our functions to test

      const HelloWorld = await ethers.getContractFactory("HelloWorld")
      const hello = await HelloWorld.deploy()
      await hello.deployed()

      expect(await hello.hello()).to.equal("This is the first web3 experiment")
  });
})

