class CreateCpfUsers < ActiveRecord::Migration
  def change
    create_table :cpf_users do |t|
      t.integer :cpf
      t.string :full_name
      t.integer :phone
      t.string :e_mail
      t.string :address
      t.string :password

      t.timestamps
    end
  end
end
