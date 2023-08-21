import React, {useEffect,useState} from 'react';
import {ethers}from 'ethers';
import { contractABI,contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;



let signer = null;
let provider;
let transactionContract


console.log(contractABI);

const getEthereumContract = async () => {
    
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner();
        transactionContract = new ethers.Contract(contractAddress,contractABI,signer)
        return transactionContract;
  
}


export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount]= useState('');
    const [formData,setFormData]= useState({addressTo:'',amount:'',keyword:'',message:''});
    const[isLoading,setIsLoading] = useState(false)
    const [transactionCount,setTransactionCount] = useState(localStorage.getItem('transactionCount'))
    const [transactions, setTransactions] = useState([]);


    const handleChange = (e, name) =>{

        setFormData((prevState) => ({...prevState,[name]:e.target.value}))

    }


    const  checkIfWalletIsConnected = async() => {

        try{
            if(!ethereum) return  alert ('Please install checkwalletConnected');

            const accounts = await ethereum.request({method: 'eth_accounts'});
            if(accounts.length){
                setCurrentAccount(accounts[0])
            //getalltransactions()
            }else{
                console.log("No accounts found");
            }
        }catch(error){
            console.log(error);
            throw new Error("No ethereum object.checkwallet")
        }

    }

    const checkIfTransactionsExist = async () => {
        
    }
    const connectWallet = async () => {
        try {
            if(!ethereum) return  alert ('Please install metamask');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object.')
        }
    }

    const sendTransaction = async () =>{
        try{
            if(!ethereum) return  alert ('Please install sendTransaction');

            const {addressTo, amount, keyword, message} = formData;
           const transactionContract= getEthereumContract();
        //    const parsedAmount = ethers.utils.parseEther(amount)

           await ethereum.request({ //sending eth from one acoout to another
            method:'eth_sendTransaction',
            params:[{
                from:currentAccount,
                to:addressTo,
                gas:'0x5208', //21000GWEI
                // value:parsedAmount._hex, // 0.0001
            }]
           })

            // const transactionHash = await transactionContract.addToBlockChain(addressTo,parsedAmount,message,keyword);
           setIsLoading(true);
        //    console.log(`Loading -${transactionHash.hash}`);
           setIsLoading(false);
        //    console.log(`Success ${transactionHash.hash}`);

           const transactionCount = await transactionContract.getTransactionCount();

           setTransactionCount(transactionCount.toNumber())
        }catch(error){
            console.log(error.message);
            throw new Error("sendTransaction Error")
        }
    }
    useEffect(() => {
        checkIfWalletIsConnected()
    },[])
    return (
        <TransactionContext.Provider value = {{transactions,connectWallet,currentAccount,formData,setFormData,handleChange,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}