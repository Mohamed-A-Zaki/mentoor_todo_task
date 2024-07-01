import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import useEditTaskForm from "@/hooks/useEditTaskForm";

export default function EditTaskForm() {
  const { form, onSubmit, t } = useEditTaskForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-center font-semibold text-2xl">{t("Edit Task")}</h3>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("task name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("task name")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("task description")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("task description")}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{t("Edit Task")}</Button>
      </form>
    </Form>
  );
}
