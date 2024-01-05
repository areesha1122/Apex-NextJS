import { updateEngine } from "@/provider/features/engines/engines.slice";
import { useAppDispatch } from "@/provider/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function useSettingDialog({ selectedItemId }: any) {
  const [showAPIKey, setShowAPIKey] = useState(false);
  const dispatch = useAppDispatch();

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      name: "",
      provider: "",
      apiKey: "",
      Modals: ["ChatGPT"],
      EnabledTo: ["Apex User"],
      IntegrationActive: true,
    },
  });

  const moveRouterDialog = (data: any) => {
    console.log("data", data);
  };

  const onSubmit = (data: any) => {
    const payload = {
      provider: data.provider,
      privacy: selectedItemId?.privacy,
      name: data.name,
      description: selectedItemId?.description,
      deploymentURI: selectedItemId?.deploymentURI,
      apiKey: data.apiKey,
    };
    const id = selectedItemId?.id;
    dispatch(updateEngine({ payload, id, successCallBack: moveRouterDialog }));
  };

  useEffect(() => {
    setValue("name", selectedItemId?.name);
    setValue("provider", selectedItemId?.provider);
    setValue("apiKey", selectedItemId?.apiKey);
  }, [selectedItemId]);

  const handleDelete = (event: any, chipToDelete: any, field: any) => {
    event.stopPropagation();
    const updatedValues = field.value.filter(
      (chip: any) => chip !== chipToDelete
    );
    field.onChange(updatedValues);
  };

  return {
    showAPIKey,
    setShowAPIKey,
    handleDelete,
    dispatch,
    onSubmit,
    handleSubmit,
    control,
  };
}
