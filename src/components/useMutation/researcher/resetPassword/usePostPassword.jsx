import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { PostNewPassword } from "../../../../api/researcher/forget-password/postNewPassword";
import { useNavigate } from "react-router-dom";

const usePostPassword= () => {
    const navigate = useNavigate();
    const {mutate : postPassword , isLoading} = useMutation({
        mutationFn:(formData) => PostNewPassword(formData),
        onSuccess:() => {
            console.log('تم تحديث كلمة المرور بنجاح')  
            toast.success('تم تحديث كلمة المرور بنجاح')
            navigate('/BugBountySyria/login')
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error(err.message)
        }
    })
  return {postPassword  ,isLoading}
}
export default usePostPassword