import React, {createContext, useState, useEffect} from 'react';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

   /**  const login = async() => {
        setUserToken('user');
        await AsyncStorage.setItem('userToken','user');
        setIsLoading(false);
    }
    */
    const login = async () => {
        try {
          //if (email === 'user' && password === 'password') {
            setIsLoading(true);
            setUserToken('user');
            await AsyncStorage.setItem('userToken', 'user');
            setIsLoading(false);
            return true; 
          //} else {
            //throw new Error('Invalid credentials');
          //}
        } catch (error) {
          console.log('Login error:', error);
          setIsLoading(false);
          return false; 
        }
      };

    const isLoggedIn = async() => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            console.log(userToken, 'username');
            setUserToken(userToken);
            setIsLoading(false);
        }
        catch(e){
            console.log(`isLogged in error ${e}`);
        }
    }

    useEffect(() =>{
        isLoggedIn();
    }, []);

    return(
        <AuthContext.Provider value={{login, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}