
from django.contrib import admin
from django.urls import path,include
from App import views

urlpatterns = [
    # Native path to access then django admin
    path('admin/', admin.site.urls),
    
    # path to access to frontend page
    path('', views.frontend, name="frontend"),
    
    # path to login/logout
    path('login/', include('django.contrib.auth.urls')),

    #-------------  BACKEND SECTION------------------#
    # path to access to backend page
    path('backend/', views.backend, name="backend"),
    
    # path to add patient
    path('add_patient', views.add_patient, name="add_patient"),

    # path to Acces the patient individually
    path('patient/<str:patient_id>', views.patient, name="patient"),
    
    # path to edit patient
    path('edit_patient', views.edit_patient, name="edit_patient"),
    
    # path to Delete the patient 
    path('delete_patient/<str:patient_id>', views.delete_patient, name="delete_patient"),
    
]