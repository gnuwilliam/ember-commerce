class CreateCnpjUsers < ActiveRecord::Migration
  def change
    create_table :cnpj_users do |t|
      t.string :cnpj
      t.string :fantasy_name
      t.integer :state_registration
      t.string :full_name
      t.integer :phone
      t.string :e_mail
      t.string :address
      t.string :transporter
      t.string :password

      t.timestamps
    end
  end
end
